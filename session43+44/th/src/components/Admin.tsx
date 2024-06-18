import React from "react";

export default function Admin() {
  return (
    <div>
      <div className="bg-slate-900 h-[6vh] text-white flex justify-between items-center">
        <ul className=" items-center flex gap-5 ml-[40px]">
          <li>
            <a className="items-center flex" href="">
              <span className="material-symbols-outlined">home</span>
              Home
            </a>
          </li>
          <li>
            <a className="items-center flex" href="">
              <span className="material-symbols-outlined">toc</span>
              Contents
            </a>
          </li>
          <li>
            <a className="items-center flex" href="">
              <span className="material-symbols-outlined">category</span>
              Categories
            </a>
          </li>
          <li>
            <a className="items-center flex" href="">
              <span className="material-symbols-outlined">settings</span>
              Settings
            </a>
          </li>
        </ul>
        <div className="bg-white flex text-black justify-around rounded-full w-[100px] h-[30px] items-center mr-[180px]">
          <img
            className="rounded-full w-[30px] h-[30px]"
            src="https://th.bing.com/th/id/OIP.hF8_3tDhRrZvxm-j1kZwgwHaE9?rs=1&pid=ImgDetMain"
            alt=""
          />
          <span className="flex items-center">Admin</span>
        </div>
      </div>
      <div className="h-[94vh] flex">
        <div
          id="side-bar"
          className=" w-[20%] bg-slate-800 h-[100%] flex flex-col items-center"
        >
          <div>
            <button className="bg-white flex items-center justify-center w-[240px] h-[40px] mb-3 mt-2 rounded-lg p-[10px]">
              <span className="material-symbols-outlined">add</span>
              New Item
            </button>
          </div>
          <div>
            <ul className="w-[100%]">
              <li className=" w-[200px] text-white mb-[20px]">
                <div className="flex items-center justify-between w-[200px]">
                  <div className="flex gap-3">
                    <span className="material-symbols-outlined">qr_code_2</span>
                    Dashboard
                  </div>
                  <span className="material-symbols-outlined">
                    keyboard_arrow_up
                  </span>
                </div>
                <div>
                  <ul className="ml-[35px] mt-[20px]">
                    <li className="mt-[20px]">Commarce</li>
                    <li className="mt-[20px]">Analytics</li>
                    <li className="mt-[20px]">Cyrpto</li>
                    <li className="mt-[20px]">Helpdesk</li>
                    <li className="mt-[20px]">Mornitoring</li>
                    <li className="mt-[20px]">Fitness</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-center justify-between w-[200px] text-white mb-[20px]">
                <div className="flex gap-3">
                  <span className="material-symbols-outlined">qr_code_2</span>
                  Application
                </div>
                <span className="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </li>
              <li className="flex items-center justify-between w-[200px] text-white mb-[20px]">
                <div className="flex gap-3">
                  <span className="material-symbols-outlined">qr_code_2</span>
                  Elements
                </div>
                <span className="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </li>
              <li className="flex items-center justify-between w-[200px] text-white mb-[20px]">
                <div className="flex gap-3">
                  <span className="material-symbols-outlined">qr_code_2</span>
                  Forms
                </div>
                <span className="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </li>
              <li className="flex items-center justify-between w-[200px] text-white mb-[20px]">
                <div className="flex gap-3">
                  <span className="material-symbols-outlined">qr_code_2</span>
                  Plugins
                </div>
                <span className="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </li>
              <li className="flex items-center justify-between w-[200px] text-white mb-[20px]">
                <div className="flex gap-3">
                  <span className="material-symbols-outlined">qr_code_2</span>
                  Elements
                </div>
                <span className="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </li>
              <li className="flex items-center justify-between w-[200px] text-white mb-[20px]">
                <div className="flex gap-3">
                  <span className="material-symbols-outlined">qr_code_2</span>
                  Datagrid
                </div>
                <span className="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </li>
              <li className="flex items-center justify-between w-[200px] text-white mb-[20px]">
                <div className="flex gap-3">
                  <span className="material-symbols-outlined">qr_code_2</span>
                  Settings
                </div>
                <span className="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div id="content" className="w-[80%]">
          <div className="flex justify-between ml-10 h-[10%]">
            <div className="text-black flex gap-5 items-centrer">
              <b className="text-[24px] flex items-center">Add a new post</b>
              <span className="flex items-center">
                <div className="flex items-center">
                  <span className="material-symbols-outlined">add</span>
                  Add content
                </div>
              </span>
              <span className="flex items-center">
                <div className="flex items-center">
                  <span className="material-symbols-outlined">settings</span>
                  Settings
                </div>
              </span>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                <input
                  type="text"
                  className="border-green-300 border w-[300px] placeholder:pl-4 h-[30px]"
                  placeholder="Search content.."
                />
                <span className="material-symbols-outlined relative right-6">
                  search
                </span>
              </div>
            </div>
          </div>
          <div className="bg-slate-500 h-[90%]">
            <div className="h-[16%]">
              <ul
                className=" w-[100%] flex items-center justify-around
               h-[100%]"
              >
                <li className="bg-white h-[60%] flex w-[20%] pl-[20px] gap-5 rounded-lg">
                  <div className="flex items-center">
                    <span className="material-symbols-outlined text-[40px]">
                      local_mall
                    </span>
                  </div>
                  <div className="flex justify-center flex-col">
                    <p>Total sales</p>
                    <p>$2456</p>
                  </div>
                </li>
                <li className="bg-white h-[60%] flex w-[20%] pl-[20px] gap-5 rounded-lg">
                  <div className="flex items-center">
                    <span className="material-symbols-outlined text-[40px]">
                      local_mall
                    </span>
                  </div>
                  <div className="flex justify-center flex-col">
                    <p>Total sales</p>
                    <p>$2456</p>
                  </div>
                </li>
                <li className="bg-white h-[60%] flex w-[20%] pl-[20px] gap-5 rounded-lg">
                  <div className="flex items-center">
                    <span className="material-symbols-outlined text-[40px]">
                      local_mall
                    </span>
                  </div>
                  <div className="flex justify-center flex-col">
                    <p>Total sales</p>
                    <p>$2456</p>
                  </div>
                </li>
                <li className="bg-white h-[60%] flex w-[20%] pl-[20px] gap-5 rounded-lg">
                  <div className="flex items-center">
                    <span className="material-symbols-outlined text-[40px]">
                      local_mall
                    </span>
                  </div>
                  <div className="flex justify-center flex-col">
                    <p>Total sales</p>
                    <p>$2456</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className=" h-[84%] flex justify-center items-center">
              <div className="bg-white h-[90%] w-[95%] rounded-lg  flex justify-center items-center">
                <div className=" h-[85%] w-[95%]">
                  <b className="text-[24px]">Form title</b>
                  <p className="mb-[30px]">
                    Phúc đẹp trai.        
                  </p>
                  <div className="alert alert-danger" role="alert">
                    Phúc quá đẹp trai nên lỗi.
                  </div>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Table Title</th>
                        <th scope="col">Table Title</th>
                        <th scope="col">Table Title</th>
                        <th scope="col">Table Title</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Abcxyz123</td>
                        <td>Abcxyz123</td>
                        <td>Abcxyz123</td>
                        <td>
                          <button type="button" className="btn btn-danger">
                            Danger
                          </button>
                          <button type="button" className="btn btn-warning">
                            Warning
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Abcxyz123</td>
                        <td>Abcxyz123</td>
                        <td>Abcxyz123</td>
                        <td>
                          <button type="button" className="btn btn-danger">
                            Danger
                          </button>
                          <button type="button" className="btn btn-warning">
                            Warning
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Abcxyz123</td>
                        <td>Abcxyz123</td>
                        <td>Abcxyz123</td>
                        <td>
                          <button type="button" className="btn btn-danger">
                            Danger
                          </button>
                          <button type="button" className="btn btn-warning">
                            Warning
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <nav
                    aria-label="Page navigation example"
                    className="flex justify-center"
                  >
                    <ul className="pagination flex gap-2">
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          4
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          5
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
