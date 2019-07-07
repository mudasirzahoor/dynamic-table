import React from 'react';
import App from './App';

export default class Table extends React.Component {
    constructor(props){
        super(props)
        this.state={
            rows:[],
            columns:[],
            error:null,
            is_loading:true
        }
    }
    componentWillMount(){
        const API_URL='http://165.227.117.36:8047/query.json'
        const RAW_BODY={
                "queryType": "SQL",
                "query": "SELECT *  FROM dfs.`/root/30YRInvestigatorsData.parquet` order by NCTID limit 10 offset 30"
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
                  this.setState({is_loading:false,rows:[{}],columns:[]})
                return;
              }
            response.json().then((data) => {
                this.setState({
                    is_loading:false,
                    rows: data.rows,
                    columns:data.columns
                })
                console.log(data);
              });
          }, (error)=> {
            console.log('error')
            alert("Error!!", error)
            this.setState({is_loading:false,rows:[{}],columns:[]})
          })
    }
    render(){
        const {is_loading, rows, columns} = this.state
        const normalized_rows = rows.map(function(obj) {
            return Object.keys(obj).sort().map(function(key) {
                return obj[key];
            });
          });
        const normalized_columns = columns.sort()
        console.log(normalized_columns, normalized_rows,'dd')
        return (
            is_loading ? <Loader/>:<App rows={normalized_rows} columns={normalized_columns}/>
        )
    }
}

function Loader(){
  return(
    <div class="loader">
      <div class="ball"></div>
      <span>Fetching Data...</span>
    </div>
  )
}