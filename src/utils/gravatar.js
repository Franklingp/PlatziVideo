import md5 from "md5";

//Gravatar service

const gravatar = (email) => {
    const base = "https://gravatar.com/avatar/";
    const formatteEmail = email.trim().toLowerCase();
    const hash = md5(formatteEmail, { encoding: "binary" });
    return `${base}${hash}`;
}

export default gravatar;