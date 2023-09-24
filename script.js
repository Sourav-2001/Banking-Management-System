function register()
{
    var userName =document.getElementById("username").value;
    var  accountNumber=document.getElementById("account-number").value;
    var initialBalance =document.getElementById("initial-balance").value;

    var user = {
        userName:userName,
        accountNumber: accountNumber,
        initialBalance: initialBalance
    }

    console.log(user);
    var bankUsers =JSON.parse(localStorage.getItem("bankUsers"));
    console.log(bankUsers);
    if(bankUsers)
    {
        bankUsers[userName] = user
    }
    else{
        bankUsers= {[userName]:user}

    }
    console.log(bankUsers);
      localStorage.setItem("bankUsers", JSON.stringify(bankUsers));
}
function logIn()
{
    var userName =document.getElementById("username").value;
    var  accountNumber=document.getElementById("account-number").value; 
    var bankUsers =JSON.parse(localStorage.getItem("bankUsers"));
    console.log(bankUsers);
    if(bankUsers && bankUsers[userName])
    {
        var dbUsername =bankUsers[userName].userName
        var dbAccountno =bankUsers[userName].accountNumber

        if(userName == dbUsername && accountNumber == dbAccountno)
        {

            localStorage.setItem("LogedUser", JSON.stringify(bankUsers[userName]));

            document.getElementById('logIn').classList.add('hidden');
            document.getElementById('user-details').classList.remove('hidden');
            showLoginData()
        }
        else
        alert("Invalid Credentials");
    }
    else{
   alert("user not found");

    }  
}

function showLoginData(){
    var LogedUser =JSON.parse(localStorage.getItem("LogedUser"));
    document.getElementById("S_username").innerText=LogedUser.userName;
    document.getElementById("S_account-number").innerText=LogedUser.accountNumber;
    document.getElementById("S_balance").innerText=LogedUser.initialBalance;
}

function deposit() {
    document.getElementById('function-div').classList.add('hidden');
    document.getElementById('deposit-div').classList.remove('hidden');
}

function withdraw() {
    document.getElementById('function-div').classList.add('hidden');
    document.getElementById('withdraw-div').classList.remove('hidden');
}
function transfer() {
    document.getElementById('function-div').classList.add('hidden');
    document.getElementById('transfer-div').classList.remove('hidden');
}
function deposit_submit() {
    var depositAmount =document.getElementById("deposit-amount").value;

    var LogedUser =JSON.parse(localStorage.getItem("LogedUser"));
    var bankUsers =JSON.parse(localStorage.getItem("bankUsers"));
    if(bankUsers)
    {
        var user = bankUsers[LogedUser.userName];
        user.initialBalance = Number(user.initialBalance) + Number(depositAmount);
        bankUsers[LogedUser.userName] = user

        localStorage.setItem("bankUsers", JSON.stringify(bankUsers));
        localStorage.setItem("LogedUser", JSON.stringify(user));
    }
    showLoginData();

    document.getElementById('deposit-div').classList.add('hidden');
    document.getElementById('function-div').classList.remove('hidden');
}
function withdraw_submit() {
    var withdrawAmount =document.getElementById("withdraw-amount").value;
   
    var LogedUser =JSON.parse(localStorage.getItem("LogedUser"));
    var bankUsers =JSON.parse(localStorage.getItem("bankUsers"));
    if(bankUsers)
    {
        
        var user = bankUsers[LogedUser.userName];
        if((Number(user.initialBalance)-Number(withdrawAmount))>0)
        {
        user.initialBalance = Number(user.initialBalance) -  Number(withdrawAmount);
        bankUsers[LogedUser.userName] = user
        }
        else{
            alert("Insufficien funds!");
        }
        localStorage.setItem("bankUsers", JSON.stringify(bankUsers));
        localStorage.setItem("LogedUser", JSON.stringify(user));
    showLoginData();
    document.getElementById('withdraw-div').classList.add('hidden');
    document.getElementById('function-div').classList.remove('hidden');

}

}
function transfer_submit() {

    var transferAmount =document.getElementById("transfer-amount").value;
    var transferAccount =document.getElementById("transfer-account").value;

    document.getElementById('transfer-div').classList.add('hidden');
      document.getElementById('function-div').classList.remove('hidden');
}

 