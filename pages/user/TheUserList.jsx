import React from 'react'

export default function TheUserList({ UserList }) {
  console.log(UserList);

  return (
    <div>
        <h5>From Passed Props [TheUserList]</h5>

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
