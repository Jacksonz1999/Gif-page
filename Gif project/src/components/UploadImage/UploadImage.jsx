import React, { useState } from "react";
import { Container, Input, FormGroup } from "reactstrap";
const UploadImage = () => {
  const [images, setImages] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "Gif-website");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/deg8vyjh7/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    /*  console.log(res); */
    setImages(file.secure_url);
    console.log(file.secure_url);
    setLoading(false);
  };

  return (
    <Container style={{ textAlign: "center" }}>
      <p style={{ margin: "35px" }}>Upload Your Image Here</p>
      <FormGroup>
        <Input
          type="file"
          name="file"
          onChange={uploadImage}
          placeholder="Sube tu imagen aqui!"
        />
        {loading ? (
          <h3>Cargando Imagenes ...</h3>
        ) : (
          <img src={images} style={{ width: "300px" }} />
        )}
      </FormGroup>
    </Container>
  );
};

export default UploadImage;
