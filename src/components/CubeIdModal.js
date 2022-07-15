import React from 'react';
import { Modal, ModalHeader, ModalBody, Button, ModalFooter, Input, Label, InputGroup } from 'reactstrap';
import PropTypes from 'prop-types';
import { ClippyIcon } from '@primer/octicons-react';

const CubeIdModal = ({ toggle, isOpen, ShortId, fullID, alert }) => {
  const onCopyClick = async (id, label) => {
    await navigator.clipboard.writeText(id);
    alert('success', `${label} copied to clipboard`);
    toggle();
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader>Cube ID</ModalHeader>
      <ModalBody>
        <h6>Short ID</h6>
        <InputGroup>
          <Input className="bg-white monospaced" value={ShortId} readOnly />
          <Button
            className="btn-sm input-group-button"
            onClick={() => onCopyClick(ShortId, 'Short ID')}
            aria-label="Copy Short ID"
          >
            <ClippyIcon size={16} />
          </Button>
        </InputGroup>
        <Label for="short-id-input">A custom, memorable ID that owners are allowed to modify.</Label>

        <h6 className="mt-3">Full ID</h6>
        <InputGroup>
          <Input className="bg-white monospaced" value={fullID} readOnly />
          <Button
            className="btn-sm input-group-button"
            onClick={() => onCopyClick(fullID, 'Full ID')}
            aria-label="Copy Full ID"
          >
            <ClippyIcon size={16} />
          </Button>
        </InputGroup>
        <Label for="full-id-input">The canonical unique ID for this cube, guaranteed not to change.</Label>
        <br />
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

CubeIdModal.propTypes = {
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  ShortId: PropTypes.string.isRequired,
  fullID: PropTypes.string.isRequired,
  alert: PropTypes.func.isRequired,
};

export default CubeIdModal;
