function creationUser()
{
  
    var user = new Object();
    user['nickName'] = 'Ricky';
    user['name'] = 'Boy';
    user['country'] = 'Sweden';
    user['age'] = 23;
    user['payment'] = ['visa', 'mastercard'];

    function alertNickName()
    {
        alert (user['nickName']);
    }

    function alertName()
    {
        alert (user['name']);
    }

    function alertBirthDate()
    {
        var result = [];
        function calculBirthDate()
        {
            var date = new Date();
            result = date.getFullYear() - user['age'];
            return result;
        }
        calculBirthDate();
        alert(calculBirthDate());
    }


    function alertUserPara (obj, user)
    {
        var result = [];
        for (var i in obj)
        {
            if(obj.hasOwnProperty(i))
            {
                result += user + "." + i + " = " + obj[i] + "\n";
            }
        }
        alert (result);
    }

    alertNickName();
    alertName();
    alertBirthDate();
    alertUserPara(user, 'user');
    return (user);
}


// Function for checking

function checkInformation()
{

    var user = creationUser();
   
    function checkList()
    {
        var check = new Object();
        check['countryList'] = ['FRANCE', 'ENGLEND', 'SWEDEN', 'FINLAND', 'SPAIN'];
        check['paymentList'] = ['VISA', 'PAYPAL', 'MASTERCARD', 'CASH'];
        check['minAge'] = 18;
        return(check);
    }
    
    var check = checkList();
    
    function checkAge()
    {
        checkList();
        if (user['age'] > check['minAge'])
        {
            alert("Vous avez l'âge requis pour entrer sur le site.");
        }
        else
        {
            alert("Vous n'avez pas l'aĝe requis pour entre sur le site.");
        }
    }

    function checkCountry()
    {
        var upperUserCountry = user['country'].toUpperCase();
        if (check['countryList'].indexOf(upperUserCountry) > -1)
        {
            alert("Vous avez l'autorisation");
        }
        else
        {
            alert("Vous n'avez pas l'autorisation");
        }
    }

    function checkPayment()
    {
        var upperUserPayment = [];
        user['payment'].forEach (function(element)
        {
            console.log(element);
            var upperUserPayment = element.toUpperCase();
            
            if (check['paymentList'].indexOf(upperUserPayment) > -1)
            {
                alert("Votre moyen de paiement est autorisé " + upperUserPayment);
            }
            else
            {
                alert("Votre moyen de paiement n'est pas autorisé " + upperUserPayment);
            }
        });
    }

    checkAge();
    checkCountry();
    checkPayment();
}

checkInformation();