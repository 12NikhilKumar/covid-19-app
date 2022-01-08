import axios from 'axios';
import React from 'react';
const Table = ({state,active,death,recoverd,vacinated})=>{
    const cardStyle = {
        width:'95%',
        height:'80px',
        border: '1px solid black',
        display: 'flex',
        padding: '1.5rem',
        gap:'14rem',
        justifyContent: 'center',
        margin: 'auto'
    }
    return (
        <div style={cardStyle}>
            <div>{state}</div>
            <div>
                <div>Active Cases</div>
                <div>{active}</div>
            </div>
            <div>
                <div>Deaths</div>
                <div>{death}</div>
            </div>
            <div>
                <div>Recoverd</div>
                <div>{recoverd}</div>
            </div>
            <div>
                <div>Total Tests</div>
                <div>{vacinated}</div>
            </div>
        </div>
    )
}
const CovidData = ()=>{
    const [data,setData] = React.useState(null);
    const [total,setTotal] = React.useState(null);
    const [qurey,setQurey] = React.useState(null);
    const [url,setUrl] = React.useState(`https://corona.lmao.ninja/v2/countries`);
    const Search = ()=>{
        setUrl(`https://corona.lmao.ninja/v2/countries/${qurey}`);
    }
    React.useEffect(()=>{
        const config = {
            method: 'get',
            url: url
        }
        const config1 = {
            method: 'get',
            url : 'https://covid19-stats-api.herokuapp.com/api/v1/cases?country=India'
        }
        axios(config)
        .then((res) =>{
            setData(res.data)
            console.log(res.data)
        })
        axios(config1)
        .then((response) =>{
            setTotal(response.data)
        })
    },[url])
    const BanerStyle = {
        width:'95%',
        height:'350px',
        backgroundColor:'teal',
        color:'aqua',
        margin: 'auto',
        padding: '1.5rem'
    }
    return (
        <div>
            <div style={BanerStyle}>
                <h1>Covid Data of India</h1>
                <div style={{display:'flex',padding:'1rem',gap:'10rem',justifyContent: 'center',fontSize:'18px',fontWeight:'bold'}}>
                    <div style={{width:'220px',height:'30px',backgroundColor:'#A7CBFF',color:'black',padding:"1.5rem",borderRadius:'7px'}}>Active Cases :{total?.confirmed}</div>
                    <div style={{width:'220px',height:'30px',backgroundColor:'#FF8D8B',color:'black',padding:"1.5rem",borderRadius:'7px'}}>Deaths :{total?.deaths}</div>
                    <div style={{width:'220px',height:'30px',backgroundColor:'#A2EA97',color:'black',padding:"1.5rem",borderRadius:'7px'}}>Recoverd : {total?.recovered}</div>
                </div>
                <h2>Please Were a mask and always sanitize your hand</h2>
            </div>
            <div>
                <h3>Country Wise Data</h3>
                <input style={{padding:'1rem',width:'550px',margin:'1rem',textAlign:'center'}} type="text" placeholder="Search your country" value={qurey} onChange={(e)=>setQurey(e.target.value)} /><button onClick={Search}>Search</button>
            {data?.length>1?(data.map((item) =>(
                <Table key={item.countryInfo.id} state={item.country} active={item.cases} death={item.deaths} recoverd={item.recovered} vacinated={item.tests}/>
            ))):(<Table key={data?.countryInfo.id} state={data?.country} active={data?.cases} death={data?.deaths} recoverd={data?.recovered} vacinated={data?.tests}/>)}
            </div>
        </div>
    )
}
export default CovidData