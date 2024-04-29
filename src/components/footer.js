import React from 'react'

export default function footer() {
    return (
        <div className="footer">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <div className="socialMedia">


                <a href="#" class="fa fa-facebook" style={{
                    color: 'white',
                    margin: '20px',
                    fontSize: '70px',
                    cursor: 'pointer'
                }}></a>

                <a href="#" class="fa fa-twitter" style={{
                    color: 'white',
                    margin: '20px',
                    fontSize: '70px',
                    cursor: 'pointer'
                }}></a>

                <a href="https://www.instagram.com/racing_shackle_887/" class="fa fa-instagram" style={{
                    color: 'white',
                    margin: '20px',
                    fontSize: '70px',
                    cursor: 'pointer'
                }}></a>
            </div>

            &copy; 
        </div>
    )
}
