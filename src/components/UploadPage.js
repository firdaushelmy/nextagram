import React, { useState } from "react";
import {
  Form,
  FormGroup, Label, Input, Button, FormText
} from "reactstrap";

const UploadPage = () => {
  const [imageFile, setImageFile] = useState(null)

  const handleImageSubmit = e => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleImageSubmit}>
      <FormGroup>
        <Label>Upload Your Siham</Label>
        <Input
          type="file"
          name="image-file"
          value={imageFile}
          onChange={e => setImageFile(e.target.files[0])} />
        <FormText color="muted">
          make sure the image being uploaded is a supported format. yah
      </FormText>
      </FormGroup>
      <Button
        type="submit"
        color="primary">
        Uploadah
    </Button>
    </Form>
  )
}

export default UploadPage