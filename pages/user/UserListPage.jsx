import React from 'react'

export default function UserListPage({ UserList }) {
  //console.log(UserList);

  return (
    <div>
        <h5>From Passed Props [ UserList Page ]</h5>

        <ul>
        {
            UserList && UserList.map( (article, index) =>
                <li key={ index+"getStaticPaths" } >
                    { article.attributes.title }
                </li>
            )
        }
        </ul>
    </div>
  )
}
