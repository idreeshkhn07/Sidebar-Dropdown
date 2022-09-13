import React from 'react'

const Header = () => {
    return (
      <div className="main">
        <div className="header flex justify-between p-5 shadow items-center">
          <h1
            className="text-3xl ml-7 font-bold cursor-pointer"
            onClick={() => {
              // navigate("/");
            }}
          >
            <b className="text-primary">IDK</b>{" "}
            <b className="text-secondary">MUSIC</b>
          </h1>
  
          {/* {user.role === "admin" && ( */}
            <>
              <div className="flex items-center gap-2">
                {/* <Link to={"/upload-music"}> */}
                  <h1>Dashboard</h1>
                {/* </Link> */}
              </div>
            </>
          {/* )} */}
  
          <div className="flex items-center gap-2">
            {/* <Link to={"/profile"}> */}
              {/* <h1 className="text-xl">{user?.name.toUpperCase()}</h1> */}
              <h1>profile</h1>
            {/* </Link> */}
            <i
              className="ri-logout-circle-r-line text-xl cursor-pointer"
              onClick={() => {
                localStorage.removeItem("token");
                window.location.reload();
              }}
            ></i>
          </div>
        </div>
        {/* <div className="content m-10">{children}</div> */}
      </div>
    );
  
}

export default Header
