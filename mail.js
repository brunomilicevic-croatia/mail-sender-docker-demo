const mailClient=require('node-mail-client')

const mail=new mailClient({
  user:`tester@test.com`,
  pass:`nothing`,
  imap:[process.env.MAIL_SERVER_HOST,1025], 
  smtp:[process.env.MAIL_SERVER_HOST,1025],
  name:'Test'
})

mail.check =1;

const send = (mailData) => {
  return mail.send(mailData);
}

module.exports.send = send;
