import bcrypt from "bcryptjs";
export const hashPassWord = (registerInfo, setRegisterInfo) => {
  bcrypt.hash(registerInfo.password, 10, (err, hash) => {
    console.log(hash);
    setRegisterInfo({ ...registerInfo, password: hash });
  });
};
