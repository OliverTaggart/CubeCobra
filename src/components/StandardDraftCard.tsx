import React, { useContext, useMemo, useState } from 'react';

import CSRFForm from 'components/CSRFForm';
import CubeContext from 'contexts/CubeContext';
import Button from 'components/base/Button';
import { Card, CardBody, CardFooter, CardHeader } from 'components/base/Card';
import { Flexbox } from 'components/base/Layout';
import Select, { rangeOptions } from 'components/base/Select';
import Text from 'components/base/Text';

interface StandardDraftCardProps {
  defaultDraftFormat: number;
}

const StandardDraftCard: React.FC<StandardDraftCardProps> = ({ defaultDraftFormat }) => {
  const { cube, canEdit } = useContext(CubeContext);
  const [packs, setPacks] = useState('3');
  const [cards, setCards] = useState('15');
  const [seats, setSeats] = useState('8');
  const formRef = React.createRef<HTMLFormElement>();

  const formData = useMemo(
    () => ({
      packs,
      cards,
      seats,
      id: '-1',
    }),
    [packs, cards, seats],
  );

  return (
    <Card>
      <CSRFForm method="POST" action={`/cube/startdraft/${cube.id}`} formData={formData} ref={formRef}>
        <CardHeader>
          <Text lg semibold>
            {defaultDraftFormat === -1 && 'Default Format: '}Standard Draft
          </Text>
        </CardHeader>
        <CardBody>
          <Flexbox direction="col" gap="2">
            <Select
              label="Number of packs"
              id="packs"
              defaultValue="3"
              options={rangeOptions(1, 16)}
              value={packs}
              setValue={setPacks}
            />
            <Select
              label="Cards per pack"
              id="cards"
              defaultValue="15"
              options={rangeOptions(1, 25)}
              value={cards}
              setValue={setCards}
            />
            <Select
              label="Total seats"
              id="seats"
              defaultValue="8"
              options={rangeOptions(2, 17)}
              value={seats}
              setValue={setSeats}
            />
          </Flexbox>
        </CardBody>
        <CardFooter>
          <Flexbox justify="between" direction="row" className="w-full" gap="2">
            <Button block color="primary" onClick={() => formRef.current?.submit()}>
              Start Draft
            </Button>
            {canEdit && defaultDraftFormat !== -1 && (
              <Button
                block
                color="accent"
                className="me-3"
                type="link"
                href={`/cube/${cube.id}/defaultdraftformat/${encodeURIComponent(-1)}`}
              >
                Make Default
              </Button>
            )}
          </Flexbox>
        </CardFooter>
      </CSRFForm>
    </Card>
  );
};

export default StandardDraftCard;
