import React from "react";
import { Form, Button, Message, TextArea, Divider } from "semantic-ui-react";

function CommonInputs({
  user: { bio, facebook, instagram, youtube, twitter },
  handleChange,
  showSocialLinks,
  setShowSocialLinks
}) {
  return (
    <>
      <Form.Field
        required
        control={TextArea}
        name="bio"
        value={bio}
        onChange={handleChange}
        placeholder="bio"
      />

      <Button
        content="Add Social Links"
        color="blue"
        icon="at"
        type="button"
        onClick={() => setShowSocialLinks(!showSocialLinks)}
      />

      {showSocialLinks && (
        <>
          <Divider />
          <Form.Input
            icon="facebook f"
            name="facebook"
            value={facebook}
            onChange={handleChange}
            placeholder="https://facebook.com/"
          />

          <Form.Input
            icon="twitter"
            name="twitter"
            value={twitter}
            onChange={handleChange}
            placeholder="https://twitter.com/"
          />

          <Form.Input
            icon="instagram"
            name="instagram"
            value={instagram}
            onChange={handleChange}
            placeholder="https://instagram.com/"
          />

          <Form.Input
            icon="youtube"
            name="youtube"
            value={youtube}
            onChange={handleChange}
            placeholder="https://youtube.com/"
          />

          <Message
            icon="attention"
            info
            size="small"
            header="Optional! Social Media Links aren't mandatory"
          />
        </>
      )}
    </>
  );
}

export default CommonInputs;
