document.forms["inscription"].addEventListener("submit",function(e) {

        let Obj;
        let Objnew;

        email = document.getElementById('email').value ;
        pswd =   document.getElementById('psw').value ;
        Nom=  document.getElementById('Nom').value;
        prenom= document.getElementById('prenom').value;
        Obj = (JSON.parse(localStorage.getItem('utilisateurs')) || []);
        Objnew = {email: email, pswd: pswd, Name: Nom,LastName: prenom };
        flag=false;
        for ( x in Obj){
            console.log(Obj[x].email)
            if (Obj[x].email==Objnew.email){
                flag=true;
            }

        }
        if( !flag) {
            Obj.push(Objnew);
            localStorage.setItem('utilisateurs', JSON.stringify(Obj));
            window.alert('Votre compte a été activé avec succés');
            window.location.href="acceuil1.html"
        }
        if (flag){
            window.alert('Cet email est déjà enregistré')
        }


});