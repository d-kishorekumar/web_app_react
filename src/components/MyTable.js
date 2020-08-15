import React from 'react';
import './Table.css'

function MyTable() {
  const [usersList, setUsersList] = React.useState([]);
  const [companyDetails, setCompanyDetails] = React.useState({});
  
  React.useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(results => results.json())
      .then(response => {
		  console.log({response})
        const {data, ad} = response;
        setUsersList(data);
        setCompanyDetails(ad);
      });
  }, []); // <-- Have to pass in [] here!
  const userTable =()=>{
	  console.log("---------");
	  console.log({usersList, companyDetails})	
	return <div>hello</div>
  }
console.log({usersList, companyDetails})	
  return (
    <div className="table-wrapper">
	<table>
		<thead>
			<tr>
				<td>Sno</td>
				<td>Avatar</td>
				<td>Full Name</td>
				<td>Email</td>
			</tr>
		</thead>
	<tbody>
      {usersList.map((value, index) => {
        return (<tr key={index}>
				<td>{value.id}</td>
				<td>< img src={value.avatar} alt= {value.first_name} /></td>
				<td >{value.latst_name}{value.first_name}</td>
				<td >{value.email}</td>
				</tr>)
      })}
    </tbody>
	</table>
    </div>
  );
}

export default MyTable;
