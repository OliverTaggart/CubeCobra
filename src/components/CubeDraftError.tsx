import React from 'react';
import { Card, CardBody, CardHeader } from 'components/base/Card';
import Text from 'components/base/Text';

interface CubeDraftErrorProps {
  message: string;
}

const CubeDraftError: React.FC<CubeDraftErrorProps> = ({ message }) => {
  return (
    <Card className="mt-4">
      <CardHeader>
        <Text semibold lg>
          Error: could not join draft.
        </Text>
      </CardHeader>
      <CardBody>
        <p>{message}</p>
      </CardBody>
    </Card>
  );
};

export default CubeDraftError;
