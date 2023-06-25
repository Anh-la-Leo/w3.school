const UPS = document.getElementById("Up")
const Nav = document.createElement("nav");
Nav.id = "navbar"
Nav.classList.add("navbar", "row")
UPS.appendChild(Nav)

//add thẻ a vào trong thẻ nav
const a = document.createElement("a")
Nav.appendChild(a)
a.href = "#"
a.id = "block-logo"
a.classList.add("gbif-logo", "col-1");
//add thẻ svg vào trong thẻ a
const svg = document.createElement("svg")
a.appendChild(svg)
svg.setAttribute("viewBox", "90 239.1 539.7 523.9")
svg.setAttribute("xmlns", "http://www.w3.org/2000/svg")
svg.style = "display: inline-block; width: 2.3rem; height: 2.3rem;margin: 10px;"
//them the path1 vao trong the svg
const path1 = document.createElement("path")
svg.appendChild(path1)
path1.className = "gbif-logo-svg"
path1.setAttribute("d", "M325.5,495.4c0-89.7,43.8-167.4,174.2-167.4C499.6,417.9,440.5,495.4,325.5,495.4")
path1.setAttribute("fill","white")
//them the path2 vao trong the svg
const path2 = document.createElement("path")
svg.appendChild(path2)
path2.className = "gbif-logo-svg"
path2.setAttribute("d", "M534.3,731c24.4,0,43.2-3.5,62.4-10.5c0-71-42.4-121.8-117.2-158.4c-57.2-28.7-127.7-43.6-192.1-43.6c28.2-84.6,7.6-189.7-19.7-247.4c-30.3,60.4-49.2,164-20.1,248.3c-57.1,4.2-102.4,29.1-121.6,61.9c-1.4,2.5-4.4,7.8-2.6,8.8c1.4,0.7,3.6-1.5,4.9-2.7c20.6-19.1,47.9-28.4,74.2-28.4c60.7,0,103.4,50.3,133.7,80.5C401.3,704.3,464.8,731.2,534.3,731")
path2.setAttribute("fill","white")
//add the div tong vao the nav
const divGet = document.createElement("div")
Nav.appendChild(divGet)
divGet.id = "Get"
divGet.className = "col-7"
divGet.style = "list-style: none;margin: 10px;"
const menus = [
  {

    "id": 1,
    "name": 'Get data',
    "order": [
      {
        "name_order": "",
        "orders": [
          {
            "dish": "Occurrences",
            "src": "#"
          },
          {
            "dish": "GBIF API",
            "src": "#"
          },
          {
            "dish": "Species",
            "src": "#"
          },
          {
            "dish": "Datasets",
            "src": "#"
          },
          {
            "dish": "Occurrence snapshots",
            "src": "#"
          },
          {
            "dish": "Hosted portals",
            "src": "#"
          },
          {
            "dish": "Trends",
            "src": "#"
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "name": 'How to',
    "order": [
      {
        "name_order": "SHARE DATA",
        "orders": [
          {
            "dish": "Quick-start guide",
            "src": "#"
          },
          {
            "dish": "Dataset classes",
            "src": "#"
          },
          {
            "dish": "Data hosting",
            "src": "#"
          },
          {
            "dish": "Standards",
            "src": "#"
          },
          {
            "dish": "Become a publisher",
            "src": "#"
          },
          {
            "dish": "Data quality",
            "src": "#"
          },
          {
            "dish": "Data papers",
            "src": "#"
          }
        ]
      },
      {
        "name_order": "USE DATA",
        "orders": [
          {
            "dish": "Featured data use",
            "src": "#"
          },
          {
            "dish": "Citation guidelines",
            "src": "#"
          },
          {
            "dish": "GBIF citations",
            "src": "#"
          },
          {
            "dish": "Citation widget",
            "src": "#"
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "name": 'Tools',
    "order": [
      {
        "name_order": "IPT",
        "orders": [
          {
            "dish": "IPT",
            "src": "#"
          },
          {
            "dish": "Data validator",
            "src": "#"
          },
          {
            "dish": "Scientific Collections",
            "src": "#"
          },
          {
            "dish": "Suggest a dataset",
            "src": "#"
          },
          {
            "dish": "New data model ⭐",
            "src": "#"
          }
        ]
      },
      {
        "name_order": "DATA ACCESS AND USE",
        "orders": [
          {
            "dish": "Hosted portals",
            "src": "#"
          },
          {
            "dish": "Data processing",
            "src": "#"
          },
          {
            "dish": "Derived datasets",
            "src": "#"
          },
          {
            "dish": "rgbif",
            "src": "#"
          },
          {
            "dish": "pygbif",
            "src": "#"
          },
          {
            "dish": "MAXENT",
            "src": "#"
          },
          {
            "dish": "Tools câtlogue",
            "src": "#"
          }
        ]
      },
      {
        "name_order": "GBIF LABS",
        "orders": [
          {
            "dish": "Species matching",
            "src": "#"
          },
          {
            "dish": "Name parser",
            "src": "#"
          },
          {
            "dish": "Sequence ID",
            "src": "#"
          },
          {
            "dish": "Relative observation trends",
            "src": "#"
          },
          {
            "dish": "GBIF data blog",
            "src": "#"
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "name": 'Community',
    "order": [
      {
        "name_order": "NETWORK",
        "orders": [
          {
            "dish": "Participant network",
            "src": "#"
          },
          {
            "dish": "Nodes",
            "src": "#"
          },
          {
            "dish": "Publishers",
            "src": "#"
          },
          {
            "dish": "Network contacts",
            "src": "#"
          },
          {
            "dish": "Community forum",
            "src": "#"
          },
          {
            "dish": "alliance for biodiversity",
            "src": "#"
          },

        ]
      },
      {
        "name_order": "VOLUNTEERS",
        "orders": [
          {
            "dish": "Mentors",
            "src": "#"
          },
          {
            "dish": "Ambassadors",
            "src": "#"
          },
          {
            "dish": "Translators",
            "src": "#"
          },
          {
            "dish": "Citizen scientists",
            "src": "#"
          }
        ]
      },
      {
        "name_order": "ACTIVITIES",
        "orders": [
          {
            "dish": "Capacity enhancement",
            "src": "#"
          },
          {
            "dish": "Programes & projects",
            "src": "#"
          },
          {
            "dish": "Tranining and learning resources",
            "src": "#"
          },
          {
            "dish": "Data Use Club",
            "src": "#"
          },
          {
            "dish": "Living Atlases",
            "src": "#"
          }
        ]
      }
    ]
  },
  {
    "id": 5,
    "name": 'About',
    "order": [
      {
        "name_order": "INSIDE GBIF",
        "orders": [
          {
            "dish": "What is GBIF?",
            "src": "#"
          },
          {
            "dish": "Become a member",
            "src": "#"
          },
          {
            "dish": "Governance",
            "src": "#"
          },
          {
            "dish": "Implementation plan",
            "src": "#"
          },
          {
            "dish": "Work Programme",
            "src": "#"
          },
          {
            "dish": "Partnerships",
            "src": "#"
          },
          {
            "dish": "Release notes",
            "src": "#"
          },
          {
            "dish": "Contacts",
            "src": "#"
          }
        ]
      }, {
        "name_order": "NEWS & OUTREACH",
        "orders": [
          {
            "dish": "News",
            "src": "#"
          },
          {
            "dish": "Newsletters and lists",
            "src": "#"
          },
          {
            "dish": "Events",
            "src": "#"
          },
          {
            "dish": "Awards",
            "src": "#"
          },
          {
            "dish": "Science Review",
            "src": "#"
          },
          {
            "dish": "Data use",
            "src": "#"
          }
        ]
      }
    ]
  }
];

function fn_showList() {
  for (let i = 0; i < menus.length; i++) {
    const divBoyGet = document.createElement("div")
    divBoyGet.className = "w3-dropdown-click"
    divGet.appendChild(divBoyGet)
    const btnID_menu = document.createElement("button")
    btnID_menu.id = `${menus[i].id}`
    btnID_menu.className = "w3-button text-light"
    btnID_menu.setAttribute("onclick","fn_Click(this)")
    const text_btnId_menu = document.createTextNode(`${menus[i].name}`)
    btnID_menu.appendChild(text_btnId_menu)
    divBoyGet.appendChild(btnID_menu)
    const divID_menu = document.createElement("div")
    divID_menu.id = `${menus[i].id}`
    divID_menu.className = "w3-dropdown-content w3-bar-block w3-card-4 clickShow"
    divBoyGet.appendChild(divID_menu)
    divGet.appendChild(divBoyGet)
    const div_divID_menu = document.createElement("div")
    div_divID_menu.style = "display:flex"
    divID_menu.appendChild(div_divID_menu)
    const divBoy_div_divID_menu = document.createElement("div")
    div_divID_menu.appendChild(divBoy_div_divID_menu)
    // const fn_childMenu = document.createTextNode("${fn_childMenu(menus[i].order)}")
    // divBoy_div_divID_menu.appendChild(fn_childMenu)
   
    // for(let j=0;j<menus[i].order.length;j++){
    //     const p=document.createElement("p")
    //     p.href="#"
    //     p.className='w3-bar-item w3-button'
    //     const span=(`${menus[i].order[j].name_order}`)
    //     for(let k=0;k<menus[i].order[j].orders.length;j++){
    //       p.appendChild(span)
    //         const spans=document.createElement("span")
    //         spans.style="display:flex;flex-direction: column;"
    //         const a=document.createElement("a")
    //         a.appendChild(spans)
    //         a.href="${menus[i].order[j].orders[k].src}"
    //         a.className="text-dark"
    //         const text=document.createTextNode("${menus[i].order[j].orders[k].dish}")
    //         a.appendChild(text)
            
    //         divBoy_div_divID_menu.appendChild(p)
    //     }
    // }

    

  }
};
fn_showList();

// function fn_childMenu(childMenu){
//   for(let j=0;j<childMenu.length;j++){
//     divBoy_div_divID_menu.appendChild(p)
//       const p=document.createElement("p")
//       p.href="#"
//       p.className='w3-bar-item w3-button'
//       const span=("${childMenu[j].name_order}")
//       p.appendChild(span)
//       for(let k=0;k<childMenu[j].orders.length;j++){
//           const spans=document.createElement("span")
//           spans.style="display:flex;flex-direction: column;"
//           const a=document.createElement("a")
//           a.appendChild(spans)
//           a.href="${childMenu[j].orders[k].src}"
//           a.className="text-dark"
//           const text=document.createTextNode("${childMenu[j].orders[k].dish}")
//           a.appendChild(text)
//       }
//   }
// }
function fn_Click(e) {
  let id =  e.attributes['id'].value;
  var clickShow=document.getElementsByClassName("clickShow");
for(let i=0;i<clickShow.length;i++){
  var disp= clickShow[i].attributes["id"].value;
  if ( id == disp ) {
     clickShow[i].classList.toggle('diplayBlock');
  }
  else{
   if (clickShow[i].classList.contains('diplayBlock')){
      clickShow[i].classList.remove('diplayBlock');
   }
  //   clickShow[i].style.display="none";  
  }
}  
}
function fn_remove(){
  document.getElementById("myModal").classList.toggle("diplayBlock")
  //document.getElementById("myModal").style.display = "none"
}
function fn_showModal(){
  document.getElementById("myModal").classList.toggle("diplayBlock")
}      
function fn_close(){
  document.getElementById("Language").classList.toggle("diplayBlock")
}
function fn_language(){
  document.getElementById("Language").classList.toggle("diplayBlock")
}
// text +=`<span style="display:flex;flex-direction: column;"><a href="${childMenu[i].orders[j].src}" class="text-dark">${childMenu[i].orders[j].dish}</a></span>`;
    
//them the div col-3 vao col-7
const divCol3_1 = document.createElement("div")
Nav.appendChild(divCol3_1)
divCol3_1.className = "col-3";
divCol3_1.style = "margin: 10px;max-width:300px;"

//them the a vao the div ben tren
const a1icon = document.createElement("a")
a1icon.href = "#"
const i1Icon = document.createElement("i")
i1Icon.className = "fa fa-heartbeat"
i1Icon.setAttribute("aria-hidden", "true")
a1icon.appendChild(i1Icon)
divCol3_1.appendChild(a1icon)
const a2icon = document.createElement("a")
a2icon.href = "#"
const i2Icon = document.createElement("i")
i2Icon.className = "fa fa-language"
i2Icon.setAttribute("aria-hidden", "true")
i2Icon.setAttribute("onclick", "fn_language()")
a2icon.appendChild(i2Icon)
divCol3_1.appendChild(a2icon)
const a3icon = document.createElement("a")
a3icon.href = "#"
const i3Icon = document.createElement("i")
i3Icon.className = "fa fa-search"
i3Icon.setAttribute("aria-hidden", "true")
a3icon.appendChild(i3Icon)
divCol3_1.appendChild(a3icon)
const a4icon = document.createElement("a")
a4icon.href = "#"
const i4Icon = document.createElement("i")
i4Icon.className = "fa fa-comment"
i4Icon.setAttribute("aria-hidden", "true")
a4icon.appendChild(i4Icon)
divCol3_1.appendChild(a4icon)
const btnShowModal = document.createElement("button")
btnShowModal.type = "button"
btnShowModal.setAttribute("onclick", "fn_showModal()")
btnShowModal.className = "btn btn-light text-success"
btnShowModal.setAttribute("data-bs-target", "#myModal")
const LogIn1 = document.createTextNode("LogIn")
btnShowModal.appendChild(LogIn1)
divCol3_1.appendChild(btnShowModal)
//add the div co id bang Language vao th upp
const divLanguage = document.createElement("div")
UPS.appendChild(divLanguage)
divLanguage.id = "Language"
divLanguage.style = "display: none; z-index: 22;position: fixed;width: 400px;margin: 60px 0 0 1200px;"
//add the div vao the div co id la language
const div1 = document.createElement("div")
div1.style = "display: flex;justify-content: space-between;background-color: rgb(46, 211, 46);color: white;padding: 20px 20px 0 20px;"
divLanguage.appendChild(div1)
const p01Div01 = document.createElement("p")
const textP01Div01 = document.createTextNode("Change language")
p01Div01.appendChild(textP01Div01)
div1.appendChild(p01Div01)
const p02Div01 = document.createElement("p")
const textP02Div01 = document.createTextNode("X")
p02Div01.setAttribute("onclick", "fn_close()")
p02Div01.appendChild(textP02Div01)
div1.appendChild(p02Div01)

const div2 = document.createElement("div")
div2.style = "padding: 20px;background-color: white;"
divLanguage.appendChild(div2)
const language = [
  {
    "id": 2,
    "class": "radio_input",
    "type": "radio",
    "name": "checkbox",
    "value": "/",
    'for': "tenhienthi",
    "active": "i01",
    "textNode": "العربية"
  },
  {
    "id": 3,
    "class": "radio_input",
    "type": "radio",
    "name": "checkbox",
    "value": "/",
    'for': "tenhienthi",
    "active": "i01",
    "textNode": "简体中文"
  },
  {
    "id": 4,
    "class": "radio_input",
    "type": "radio",
    "name": "checkbox",
    "value": "/",
    'for': "tenhienthi",
    "active": "i01",
    "textNode": "Français"
  },
  {
    "id": 5,
    "class": "radio_input",
    "type": "radio",
    "name": "checkbox",
    "value": "/",
    'for': "tenhienthi",
    "active": "i01",
    "textNode": "Русский"
  },
  {
    "id": 6,
    "class": "radio_input",
    "type": "radio",
    "name": "checkbox",
    "value": "/",
    'for': "tenhienthi",
    "active": "i01",
    "textNode": "Español"
  },
  {
    "id": 7,
    "class": "radio_input",
    "type": "radio",
    "name": "checkbox",
    "value": "/",
    'for': "tenhienthi",
    "active": "i01",
    "textNode": "繁體中文"
  },
  {
    "id": 8,
    "class": "radio_input",
    "type": "radio",
    "name": "checkbox",
    "value": "/",
    'for': "tenhienthi",
    "active": "i01",
    "textNode": "日本語"
  },
  {
    "id": 9,
    "class": "radio_input",
    "type": "radio",
    "name": "checkbox",
    "value": "/",
    'for': "tenhienthi",
    "active": "i01",
    "textNode": "Português"
  },
  {
    "id": 10,
    "class": "radio_input",
    "type": "radio",
    "name": "checkbox",
    "value": "/",
    'for': "tenhienthi",
    "active": "i01",
    "textNode": "Українська"
  },
]
//add cac the p co class="radio_input"
const pAll1 = document.createElement("p")
pAll1.id = `1`
pAll1.className = `radio_input`
div2.appendChild(pAll1);
const inputAll1 = document.createElement("input")
inputAll1.type = `radio`
inputAll1.setAttribute("checked", "checked")
inputAll1.className = `active`
inputAll1.name = `checkbox`
inputAll1.value = `/`
pAll1.appendChild(inputAll1)
const labelAll1 = document.createElement("label")
labelAll1.for = `tenhienthi`
const textNode1 = document.createTextNode(`English`)
labelAll1.appendChild(textNode1)
pAll1.appendChild(labelAll1)



for (let i = 0; i < language.length; i++) {
  const pAll = document.createElement("p")
  pAll.id = `${language[i].id}`
  pAll.className = `${language[i].class}`
  div2.appendChild(pAll);
  const inputAll = document.createElement("input")
  inputAll.type = `${language[i].type}`
  inputAll.setAttribute("checked", `${language[i].name}`)
  inputAll.className = `${language[i].active}`
  inputAll.name = `${language[i].name}`
  inputAll.value = `${language[i].value}`
  pAll.appendChild(inputAll)
  const labelAll = document.createElement("label")
  labelAll.for = `${language[i].for}`
  const textNode = document.createTextNode(`${language[i].textNode}`)
  labelAll.appendChild(textNode)
  pAll.appendChild(labelAll)

}

//add div co id="myModal" vao div co ì="Up"
const divMyMoDal = document.createElement("div")
UPS.appendChild(divMyMoDal)
divMyMoDal.id = "myModal"
divMyMoDal.style = "display: none; background-color: white; z-index: 30;position: fixed;right: 1.43rem;top:calc(5rem - 0.8rem);left: initial;width: 370px;box-shadow: 0 5px 150px 20px rgba(0,0,0,.15);overflow-x: auto;padding: 20px;"
const divRow = document.createElement("div")
divMyMoDal.appendChild(divRow)
divRow.className = "row"
divRow.style = "display:flex;justify-content: space-between;"
const ulNav = document.createElement("ul")
divRow.appendChild(ulNav)
ulNav.className = "nav nav-tabs col-10"
ulNav.id = "myTab"
ulNav.role = "tablist"
ulNav.style = " display: flex;justify-content: space-between;"


const listNavIteam1 = document.createElement("li")
ulNav.appendChild(listNavIteam1)
listNavIteam1.className = "nav-item col-6"
listNavIteam1.role = "presentation"
const btnNavLink1 = document.createElement("button")
listNavIteam1.appendChild(btnNavLink1)
btnNavLink1.className = "nav-link text-muted active"
btnNavLink1.id = "login-tab"
btnNavLink1.setAttribute("data-bs-toggle", "tab")
btnNavLink1.setAttribute("data-bs-target", "#home")
btnNavLink1.nodeType = "tab"
btnNavLink1.setAttribute("aria-controls", "home")
btnNavLink1.setAttribute("aria-selected", "true")
const textNodeLOGIN = document.createTextNode("LOGIN")
btnNavLink1.appendChild(textNodeLOGIN)

const listNavIteam2 = document.createElement("li")
ulNav.appendChild(listNavIteam2)
listNavIteam2.className = "nav-item col-6"
listNavIteam2.role = "presentation"
const btnNavLink2 = document.createElement("button")
listNavIteam2.appendChild(btnNavLink2)
btnNavLink2.className = "nav-link text-muted active"
btnNavLink2.id = "register-tab"
btnNavLink2.setAttribute("data-bs-toggle", "tab")
btnNavLink2.setAttribute("data-bs-target", "#profile")
btnNavLink2.nodeType = "tab"
btnNavLink2.setAttribute("aria-controls", "profile")
btnNavLink2.setAttribute("aria-selected", "false")
const textNodeREGISTER = document.createTextNode("REGISTER")
btnNavLink2.appendChild(textNodeREGISTER)

const buttonNav = document.createElement("button")
divRow.appendChild(buttonNav)
buttonNav.className = "nav-link col-2 bg-light btn-outline-secondary"
buttonNav.id = "contact-tab"
buttonNav.setAttribute("data-bs-toggle", "tab")
buttonNav.setAttribute("data-bs-target", "#contact")
buttonNav.nodeType = "tab"
buttonNav.setAttribute("aria-controls", "contact")
buttonNav.setAttribute("aria-selected", "false")
buttonNav.onclick="fn_remove()"
buttonNav.style = "border-radius: 50%;border: none;"
const textNodeX = document.createTextNode("X")
buttonNav.appendChild(textNodeX)

const divmyTabContent = document.createElement("div")
divMyMoDal.appendChild(divmyTabContent)
divmyTabContent.className = "tab-content"
divmyTabContent.id = "myTabContent"

function fn_form1(){
const form1=document.createElement("form")
divmyTabContent.appendChild(form1)
form1.className="tab-pane fade show active"
form1.id="home"
form1.role="tabpanel"
form1.setAttribute("aria-labelledby","login-tab")
const form1_div01=document.createElement("div")
form1_div01.className="mb-3 mt-3"
form1.appendChild(form1_div01)
const label1=document.createElement("label")
form1_div01.appendChild(label1)
label1.for="tenhienthi"
label1.className="form-control"
label1.id="form_input"
const label1_text=document.createTextNode("USERNAME OR EMAIL")
label1.appendChild(label1_text)
const input1_form1=document.createElement("input")
form1_div01.appendChild(input1_form1)
input1_form1.type="text" 
input1_form1.className="form-control" 
input1_form1.id="txtHienThi" 
input1_form1.required 
input1_form1.name="tenhiethi"


const form1_div02=document.createElement("div")
form1_div02.className="mb-3 mt-3"
form1_div02.id="divPassW"
form1.appendChild(form1_div02)
const label2=document.createElement("label")
form1_div01.appendChild(label2)
label2.for="tenhienthi"
label2.className="form-control"
label2.id="form_input"
const label2_text=document.createTextNode("PASSWORD")
label2.appendChild(label2_text)
const input2_form1=document.createElement("input")
form1_div01.appendChild(input2_form1)
input2_form1.type="password" 
input2_form1.className="form-control" 
input2_form1.id="txtPDW" 
input2_form1.required 
input2_form1.name="matkhau"

const form1_div03=document.createElement("div")
form1_div03.className="modal-footer"
form1.appendChild(form1_div03)
const button3=document.createElement("button")
form1_div03.appendChild(button3)
button3.type = "submit"
button3.className="btn btn-success"
button3.style="width: 100%;"
button3.setAttribute("data-bs-dismiss","modal")
const text_login=document.createTextNode("LogIn")
button3.appendChild(text_login)
}
fn_form1()

function fn_form2(){
  const form2=document.createElement("form")
  divmyTabContent.appendChild(form2)
  form2.className="tab-pane fade"
  form2.id="profile"
  form2.role="tabpanel"
  form2.setAttribute("aria-labelledby","register-tab")
  const form2_div01=document.createElement("div")
  form2_div01.className="mb-3 mt-3"
  form2.appendChild(form2_div01)
  const label1=document.createElement("label")
  form2_div01.appendChild(label1)
  label1.for="COUNTRY"
  label1.className="form-control"
  label1.id="form_input"
  const label1_text=document.createTextNode("COUNTRY")
  label1.appendChild(label1_text)
  const input1_form2=document.createElement("input")
  form2_div01.appendChild(input1_form2)
  input1_form2.type="text" 
  input1_form2.className="form-control" 
  input1_form2.id="HienThiNew" 
  input1_form2.value="VIET NAM" 
  input1_form2.required 
  input1_form2.name="tenhiethi"
  
  const form2_div02=document.createElement("div")
  form2_div02.className="mb-3 mt-3"
  form2.appendChild(form2_div02)
  const label2=document.createElement("label")
  form2_div02.appendChild(label2)
  label2.for="email"
  label2.className="form-control"
  label2.id="form_input"
  const label2_text=document.createTextNode("Email")
  label2.appendChild(label2_text)
  const input2_form2=document.createElement("input")
  form2_div02.appendChild(input2_form2)
  input2_form2.type="email" 
  input2_form2.className="form-control" 
  input2_form2.id="txtEmail"
  input2_form2.required 
  input2_form2.name="email"

  const form2_div03=document.createElement("div")
  form2_div03.className="mb-3 mt-3"
  form2.appendChild(form2_div03)
  const label3=document.createElement("label")
  form2_div03.appendChild(label3)
  label3.for="tendangnhap"
  label3.className="form-control"
  label3.id="form_input"
  const label3_text=document.createTextNode("USERNAME")
  label3.appendChild(label3_text)
  const input3_form2=document.createElement("input")
  form2_div03.appendChild(input3_form2)
  input3_form2.type="text" 
  input3_form2.className="form-control" 
  input3_form2.id="USERNAME"
  input3_form2.required 
  input3_form2.name="tendangnhap"

  const form2_div04=document.createElement("div")
  form2_div04.className="mb-3 mt-3"
  form2_div04.id="divPassW"
  form2.appendChild(form2_div04)
  const label4=document.createElement("label")
  form2_div04.appendChild(label4)
  label4.for="pwd"
  label4.className="form-control"
  label4.id="form_input"
  const label4_text=document.createTextNode("PASSWORD")
  label4.appendChild(label4_text)
  const input4_form2=document.createElement("input")
  form2_div04.appendChild(input4_form2)
  input4_form2.type="password" 
  input4_form2.className="form-control" 
  input4_form2.id="PDW"
  input4_form2.required 
  input4_form2.name="matkhau"

  const form2_div05=document.createElement("div")
form2_div05.className="modal-footer"
form2.appendChild(form2_div05)
const button5=document.createElement("button")
form2_div05.appendChild(button5)
button5.type = "submit"
button5.className="btn btn-success"
button5.style="width: 100%;"
button5.setAttribute("data-bs-dismiss","modal")
const text_NEXT=document.createTextNode("NEXT")
button5.appendChild(text_NEXT)
}
fn_form2()
const tab_pane=document.createElement("div")
tab_pane.className="tab-pane fade"
tab_pane.id="contact"
tab_pane.role="tabpanel"
tab_pane.setAttribute("aria-labelledby","contact-tab")
divMyMoDal.appendChild(tab_pane)










//add div co id="header" vao up
const divHeader = document.createElement("div")
divHeader.id = "Header"
divHeader.style = "width: 100%;height: 616px;"
UPS.appendChild(divHeader)
const img = [
  "url('img/backgrourd.png')",
  "url('img/backgrourd2.png')",
  "url('img/backgrourd3.png')",
  "url('img/backgrourd4.png')",
  "url('img/backgrourd.png')",
  "url('img/backgrourd2.png')",
  "url('img/backgrourd3.png')",
  "url('img/backgrourd4.png')",
  "url('img/backgrourd.png')",
  "url('img/backgrourd2.png')",
]
let header = document.getElementById("Header")
let randomBackground = () => {
  let x = Math.floor(Math.random() * 10);
  header.style.background = img[x];
  header.style.backgroundSize = "cover";
  header.style.width = "100%";

}
randomBackground();
const divWidth = document.createElement("div")
div1.className = "width"
divHeader.appendChild(divWidth)
const divTop_bot = document.createElement("div")
divTop_bot.className = "top_bot"
divWidth.appendChild(divTop_bot)
const divGbif = document.createElement("div")
divGbif.style = "font-size: 18px;color: white;"
divTop_bot.appendChild(divGbif)
const Gbif = document.createTextNode("GBIF | Global Biodiversity Information Facility")
divGbif.appendChild(Gbif)
const h1_Free = document.createElement("h1")
h1_Free.style = "color: white; max-width: 700px; margin-top: 2rem; margin-bottom: 1.42857142857rem; font-weight: 500;font-size: 45px;"
const Free = document.createTextNode("Free and open access to biodiversity data")
h1_Free.appendChild(Free)
divTop_bot.appendChild(h1_Free)
const div_0 = document.createElement("div")
div_0.style = "max-width:700px"
divTop_bot.appendChild(div_0)
const link = [
  {
    "class": "inherit noUnderline",
    'style': "padding:10px 24px 8px 24px ;",
    'href': "/occurrence/search?occurrence_status=present&amp;q=",
    'textNode': 'Occurrences'
  },
  {
    "class": "inherit noUnderline",
    'style': "padding:10px 24px 8px 24px ;",
    'href': "/species/search?q=",
    'textNode': 'Species'
  },
  {
    "class": "inherit noUnderline",
    'style': "padding:10px 24px 8px 24px ;",
    'href': "/dataset/search?q=",
    'textNode': 'Datasets'
  },
  {
    "class": "inherit noUnderline",
    'style': "padding:10px 24px 8px 24px ;",
    'href': "/publisher/search?q=",
    'textNode': 'Publishers'
  },
  {
    "class": "inherit noUnderline",
    'style': "padding:10px 24px 8px 24px ;",
    'href': "/resource/search?q=",
    'textNode': 'Resources'
  },
]
const div01 = document.createElement("div")
div01.style = "background: rgba(40,44,39,.502);display: inline-flex;overflow: auto;color: #fff;max-width: 100%;"
div_0.appendChild(div01)
for (let i = 0; i < link.length; i++) {
  const a = document.createElement("a")
  a.href = `${link[i].href}`
  a.className = `${link[i].class}`
  a.style = `${link[i].style}`
  const text0 = document.createTextNode(`${link[i].textNode}`)
  a.appendChild(text0)
  div01.appendChild(a)
}
const div02 = document.createElement("div")
div02.className = "search-bar search-box"
div_0.appendChild(div02)
const div02_01 = document.createElement("div")
div02_01.className = "search-container"
div02.appendChild(div02_01)
const input_div02 = document.createElement("input")
input_div02.type = "text"
input_div02.className = "search-input"
input_div02.placeholder = "search"
div02_01.appendChild(input_div02)
const span_div02 = document.createElement("span")
span_div02.className = "search-icon"
div02_01.appendChild(span_div02)
const i_span_div02 = document.createElement("i")
i_span_div02.className = "fa fa-search"
i_span_div02.setAttribute("aria-hidden", "true")
span_div02.appendChild(i_span_div02)
const div03 = document.createElement("div")
div03.style = "background: rgba(40,44,39,.502);display: inline-flex;overflow: auto;color: #fff;max-width: 100%;"
div_0.appendChild(div03)
const a1_div03 = document.createElement("a")
div03.appendChild(a1_div03)
a1_div03.href = "/what-is-gbif"
a1_div03.style = "padding:10px 24px 8px 24px ;"
const text_span_a1_div03 = document.createTextNode("What is GBIF?")
a1_div03.appendChild(text_span_a1_div03)
const a2_div03 = document.createElement("a")
div03.appendChild(a2_div03)
a2_div03.href = "/country/VN"
a2_div03.style = "padding:10px 24px 8px 24px ;"
const span_a2_div03 = document.createElement("span")
a2_div03.appendChild(span_a2_div03)
span_a2_div03.translate = "homepage.aboutGbifCountry"
span_a2_div03.className = "ng-scope"
const text_span_a2_div03 = document.createTextNode("About GBIF Viet Nam")
span_a2_div03.appendChild(text_span_a2_div03)
