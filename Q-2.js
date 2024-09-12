function sendNotification(email) {
   const index = email.indexOf('@');

   if (index === -1  ) {
    return "Invalid Email "
   }

   const devide = email.split('@');
   const userName = devide[0];
   const domainName = devide[1];
   return `${userName} sent you an email from ${domainName}`;
}

console.log(sendNotification("zihad.ph@gmail.com"));
console.log(sendNotification("farhan34@yahoo.com"));
console.log(sendNotification("nadim.naem5@outlook.com"));
console.log(sendNotification("fahim234.hotmail.com"));
console.log(sendNotification("sadia8icloud.com"));
console.log(sendNotification("@domain.com"));
console.log(sendNotification("user@"));
