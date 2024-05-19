import React from 'react'

function Footer() {
  return (
    <>
        <div className="container-fluid">
            <div className="row ms-4">
                <div className="col-lg-4">
                    <img style={{height: '100px'}} src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="" />
                    <img style={{height: '60px'}} src="https://cdn3.iconfinder.com/data/icons/social-rounded-2/72/GitHub-512.png" alt="" />
                </div>
                <div className="col-lg-8 row">
                    <div className='col-lg-8'>
                        <p>COPYRIGHT @ 2023 PORTFOLIO WEBSITE. ALL RIGHTS RESERVED BY NOUFIYA K N</p>
                    </div>
                    <div style={{height: '40px',width: '50px'}} className="btn btn-primary col-lg-4"><i class="fa-solid fa-arrow-up"></i></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer