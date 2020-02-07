import React from 'react'

export default function Footer(props) {
    return (
        <div className="main-footer">
            <p>We are leaders in 10 countries:
            {props.foo.map(el => <> <a href={el.link}>{el.titre}</a>,</>)}
            </p><br />
            <p>This site uses cookies to deliver services in accordance with this Privacy Policy.
            You can specify the conditions for storing or accessing cookies on your browser.</p>

            www.docplanner.com © 2020
        </div>
    )
}
