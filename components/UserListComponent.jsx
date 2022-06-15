import React from 'react'

export default function UserListComponent({ UserList }) {
  //console.log(UserList);

  return (
    <div>
        <h5>From Passed Props [ UserList Component ]</h5>

        <ul>
        {
            UserList.map( (article, index) =>
                <li key={ index+"getStaticPaths" } >
                    { article.attributes.title }
                </li>
            )
        }
        </ul>
    </div>
  )
}
