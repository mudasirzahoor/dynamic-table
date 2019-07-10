import React from "react";
import MUIDataTable from "mui-datatables";
import {CircularProgress, Typography} from '@material-ui/core';
import {Nav, Row, Col} from 'react-bootstrap';

const API_URL = 'http://165.227.117.36:8047/query.json'
export default class Mult extends React.Component {
    constructor() {
        super()
        this.state = {
            rows: [],
            columns: [],
            error: null,
            is_loading: true,
            count: 10000
        }
    }

    componentWillMount() {
        this.changePage()
    }

    changePage = (page = 0, row_per_page = 10) => {
        this.setState({is_loading: true})
        console.log(page, row_per_page, page * row_per_page)
        let new_query = `SELECT *  FROM dfs.\`/root/30YRInvestigatorsData.parquet\` order by NCTID limit ${row_per_page} offset ${page * row_per_page}`
        const RAW_BODY = {
            "queryType": "SQL",
            "query": new_query
        }
        fetch(API_URL, {
            method: "POST",
            body: JSON.stringify(RAW_BODY),
            headers: {
                "Content-Type": "application/json",
                "User-Name": "mapr"
            }
        }).then((response)=> {
            if (response.status !== 200) {
                console.log('Something Went Wrong' +
                    response.status);
                alert('Something Went Wrong', response.status)
                this.setState({is_loading: false, rows: [{}], columns: []})
                return;
            }
            response.json().then((data) => {
                let rows = data.rows
                let columns = data.columns
                const normalized_rows = rows.map(function (obj) {
                    return Object.keys(obj).sort().map(function (key) {
                        return obj[key];
                    });
                });
                const normalized_columns = columns.sort()
                this.setState({
                    is_loading: false,
                    rows: normalized_rows,
                    columns: normalized_columns
                })
                console.log(data);
            });
        }, (error)=> {
            console.log('error')
            alert("Error!!", error)
            this.setState({is_loading: false, rows: [{}], columns: []})
        })
    };


    render() {
        const options = {
            filterType: "dropdown",
            // responsive: "scroll",
            responsive: 'scroll',
            serverSide: true,
            count: this.state.count,
            page: this.state.page,
            textLabels: {
                body: {
                    noMatch: "Sorry, no records found for the given query..",
                }
            },
            onTableChange: (action, tableState) => {
                // console.log(action, tableState);
                switch (action) {
                    case 'changePage':
                        this.changePage(tableState.page, tableState.rowsPerPage);
                        break;
                    case 'changeRowsPerPage':
                        this.changePage(tableState.page, tableState.rowsPerPage);
                        break;
                }
            }
        };
        return (
            <Col className={"height-100 pl-0 pr-0 border_boundry"}>
                <MUIDataTable
                    // title={"Dynamic Table"}
                    data={this.state.rows}
                    columns={this.state.columns}
                    options={options}
                    title={<Typography variant="title">
                        Dynamic Table
                        {this.state.is_loading &&
                        <CircularProgress size={24} style={{marginLeft: 15, position: 'relative', top: 4}}/>}
                    </Typography>}
                />
            </Col>
        );
    }
}
// function Loader(){
//   return(
//     <div class="loader">
//       <div class="ball"></div>
//       <span>Fetching Data...</span>
//     </div>
//   )
// }