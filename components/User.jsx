const User = ({ UserList }) => {
    //console.log(UserList);

    return ( 
        <div>
            <h5>From Passed Props [ User Components ]</h5>

            {   
                <ul>
                {
                    UserList.map( (article, index) =>
                        <li key={ index+"getStaticPaths" } >
                            { article.attributes.title }
                        </li>
                    )
                }
                </ul>
            }

        </div>
     );
}
 
export default User;