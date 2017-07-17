﻿LANSA.addComponent({id:"XDEMO_37",nm:"xDemoWebPassingWorkingListsEmployeeItem",ot:"rp",tp:"Reusable Part",de:"Employee Item",tl:14010003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"EMPNO",ft:"A",ln:5,dc:0,lb:{"ENG":"Employee no....","FRA":"No employé  . .","JPN":"Employee no....","LLL":"Employee no...."}[cL],h1:{"ENG":"  Employ","FRA":"Salarié","JPN":"  Employ","LLL":"  Employ"}[cL],h2:{"ENG":"  Number","FRA":" ","JPN":"  Number","LLL":"  Number"}[cL],
h3:" ",de:{"ENG":"Employee Number","FRA":"Numéro d´employé","JPN":"Employee Number","LLL":"Employee Number"}[cL],dv:"",ia:["FE"]},F2:{nm:"SURNAME",ft:"A",ln:20,dc:0,ks:"O",lb:"Surname........",h1:"Surname",h2:"",h3:"",de:"Employee Surname",dv:"",ia:["FE","LC"]},F3:{nm:"GIVENAME",ft:"A",ln:20,dc:0,ks:"O",lb:"Given names....",h1:"Given name(s)",h2:"",h3:"",de:"Employee Given Name(s)",dv:"",ia:["FE","LC"]},F4:{nm:"ADDRESS1",ft:"A",ln:25,dc:0,lb:{"ENG":"Address 1......","FRA":"Adresse 1 . . .","JPN":"Address 1......","LLL":"Address 1......"}[cL],
h1:{"ENG":"Address line 1","FRA":"Adresse ligne 1","JPN":"Address line 1","LLL":"Address line 1"}[cL],h2:" ",h3:" ",de:{"ENG":"Street No and Name","FRA":"Adresse ligne 1","JPN":"Street No and Name","LLL":"Street No and Name"}[cL],dv:"",ia:["FE","LC"]},F5:{nm:"ADDRESS2",ft:"A",ln:25,dc:0,ks:"O",lb:{"ENG":"Address 2......","FRA":"Adresse 2 . . .","JPN":"Address 2......","LLL":"Address 2......"}[cL],h1:{"ENG":"Address line 2","FRA":"Adresse ligne 2","JPN":"Address line 2","LLL":"Address line 2"}[cL],
h2:" ",h3:" ",de:{"ENG":"Suburb or Town","FRA":"Adresse ligne 2","JPN":"Suburb or Town","LLL":"Suburb or Town"}[cL],dv:"",ia:["FE","LC"]},F6:{nm:"ADDRESS3",ft:"A",ln:25,dc:0,ks:"O",lb:{"ENG":"Country","FRA":"Adresse 3 . . .","JPN":"Country","LLL":"Country"}[cL],h1:{"ENG":"Country","FRA":"Adresse ligne 3","JPN":"Country","LLL":"Country"}[cL],h2:" ",h3:" ",de:{"ENG":"State and Country","FRA":"Adresse ligne 3","JPN":"State and Country","LLL":"State and Country"}[cL],dv:"",ia:["FE","LC"]},F7:{nm:"POSTCODE",
ft:"S",ln:6,dc:0,ec:"3",lb:{"ENG":"Post/zip code..","FRA":"Code postal . .","JPN":"Post/zip code..","LLL":"Post/zip code.."}[cL],h1:{"ENG":"Post/zip","FRA":"Code","JPN":"Post/zip","LLL":"Post/zip"}[cL],h2:{"ENG":"Code","FRA":"Postal","JPN":"Code","LLL":"Code"}[cL],h3:" ",de:{"ENG":"Post / Zip Code","FRA":"Code postal","JPN":"Post / Zip Code","LLL":"Post / Zip Code"}[cL],dv:0,ia:["FE"]},F8:{nm:"PHONEHME",ft:"A",ln:15,dc:0,lb:{"ENG":"Home phone.....","FRA":"Tél. personnel","JPN":"Home phone.....","LLL":"Home phone....."}[cL],
h1:{"ENG":"Home phone","FRA":"Téléphone","JPN":"Home phone","LLL":"Home phone"}[cL],h2:{"ENG":"Number","FRA":"Personnel","JPN":"Number","LLL":"Number"}[cL],h3:" ",de:{"ENG":"Home Phone Number","FRA":"Numéro de téléphone personnel","JPN":"Home Phone Number","LLL":"Home Phone Number"}[cL],dv:"",ia:["FE"]},F9:{nm:"PHONEBUS",ft:"A",ln:15,dc:0,lb:{"ENG":"Business ph....","FRA":"Tél. prof.  . .","JPN":"Business ph....","LLL":"Business ph...."}[cL],h1:{"ENG":"Business Phone","FRA":"Téléphone","JPN":"Business Phone","LLL":"Business Phone"}[cL],
h2:{"ENG":"Number","FRA":"professionnel","JPN":"Number","LLL":"Number"}[cL],h3:" ",de:{"ENG":"Business Phone Number","FRA":"Numéro de téléphone professionnel","JPN":"Business Phone Number","LLL":"Business Phone Number"}[cL],dv:"",ia:["FE"]},F10:{nm:"DEPTMENT",ft:"A",ln:4,dc:0,lb:{"ENG":"Department.....","FRA":"Department.....","JPN":"部門コード...","LLL":"Department....."}[cL],h1:{"ENG":"  Dept","FRA":"  Dept","JPN":"部門","LLL":"  Dept"}[cL],h2:{"ENG":"  Code","FRA":"  Code","JPN":"コード","LLL":"  Code"}[cL],
h3:"",de:{"ENG":"Department Code","FRA":"Department Code","JPN":"部門コード","LLL":"Department Code"}[cL],dv:"",ia:["FE"]},F11:{nm:"SECTION",ft:"A",ln:2,dc:0,lb:"Section........",h1:"    Section",h2:"     Code",h3:"",de:"Section Code",dv:"",ia:["FE"]},F12:{nm:"SALARY",ft:"P",ln:11,dc:2,ec:"1",lb:{"ENG":"Salary.........","FRA":"Salaire . . . .","JPN":"Salary.........","LLL":"Salary........."}[cL],h1:{"ENG":"Salary","FRA":"Salaire","JPN":"Salary","LLL":"Salary"}[cL],h2:" ",h3:" ",de:{"ENG":"Employee Salary","FRA":"Salaire de l´employé","JPN":"Employee Salary","LLL":"Employee Salary"}[cL],
dv:0,ia:["FE","RB"]},F13:{nm:"STARTDTE",ft:"S",ln:6,dc:0,ec:"Y",lb:"Start date.....",h1:"Start",h2:"Date",h3:"",de:"Start Date (DDMMYY)",dv:0,ia:["FE","RB"]},F14:{nm:"TERMDATE",ft:"S",ln:6,dc:0,ec:"Y",lb:"Term. date.....",h1:"Term.",h2:"Date",h3:"",de:"Termination Date (DDMMYY)",dv:0,ia:["FE","RB"]},F15:{nm:"MNTHSAL",ft:"P",ln:11,dc:2,ec:"1",lb:{"ENG":"Monthly Salary","FRA":"Salaire mensuel","JPN":"Monthly Salary","LLL":"Monthly Salary"}[cL],h1:{"ENG":"Monthly","FRA":"Salaire","JPN":"Monthly","LLL":"Monthly"}[cL],
h2:{"ENG":"Salary","FRA":"mensuel","JPN":"Salary","LLL":"Salary"}[cL],h3:" ",de:{"ENG":"Monthly Salary","FRA":"Salaire mensuel","JPN":"Monthly Salary","LLL":"Monthly Salary"}[cL],dv:0,ia:["FE","RB"]},F16:{nm:"EMPTHM",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image","JPN":"???????","LLL":"Employee Image"}[cL],h1:{"ENG":"Employee","FRA":"Image","JPN":"社員ｲﾒｰｼﾞ","LLL":"Employee"}[cL],h2:{"ENG":"Image","FRA":" ","JPN":" ","LLL":"Image"}[cL],h3:" ",de:{"ENG":"Employee Image Thumbnail","FRA":"Image","JPN":"社員ｲﾒｰｼﾞ","LLL":"Employee Image"}[cL],
dv:l.SqlNull,ia:["ASQN","FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_OBJT",fd:Fd,co:function(){cO.aN.call(this);var f=this.aF("XDEMO_37",Fd);this.aLF({"EMPNO":f.F1,"SURNAME":f.F2,"GIVENAME":f.F3,"ADDRESS1":f.F4,"ADDRESS2":f.F5,"ADDRESS3":f.F6,"POSTCODE":f.F7,"PHONEHME":f.F8,"PHONEBUS":f.F9,"DEPTMENT":f.F10,"SECTION":f.F11,"SALARY":f.F12,"STARTDTE":f.F13,"TERMDATE":f.F14,"MNTHSAL":f.F15,"EMPTHM":f.F16});}});},{rp:["PRIM_OBJT"]});