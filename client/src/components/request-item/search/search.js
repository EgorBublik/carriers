const Search = ({carriers}) => {
    return <div>
        {console.log(carriers)}
        <div className='request-search'>
            <table className=" table table-hover">
                <thead>
                    <tr>
                        <th></th>
                        <th>Название компании</th>
                        <th>Тип А/М</th>
                        <th>Менеджер</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='request-checkbox'>
                            <input type="checkbox" className='form-check-input' />
                        </td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td></td>
                    </tr>
                    {carriers.map((item) => {
                        return (
                            <tr>
                                <td className='request-checkbox'>
                                    <input type="checkbox" className='form-check-input' />
                                </td>
                                <td>{item.name}</td>
                                <td>{item.type.map(element => `${element} `)}</td>
                                <td>{item.contactFace.map(element => {
                                    return (
                                        <>
                                            {`${element.firstname} ${element.lastname}`} <br/>  
                                        </>
                                        
                                    )
                                    
                                })}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    </div>;
}

export default Search