import React from "react";
import { Card, Text } from "sriracha-ui";

export default function Error() {
  return (
    <Card invert shade radius="0.5rem">
      <Text>
        Sorry, no set with this name exists in this API. You might have spelt
        the name wrong.
      </Text>
    </Card>
  );
}
