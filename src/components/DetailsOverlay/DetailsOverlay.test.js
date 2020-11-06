import React from 'react';
import { render } from '@testing-library/react';
import DetailsOverlay from './DetailsOverlay';

describe('DetailsOverlay tests', () => {
  it('should render', () => {
    expect(render(<DetailsOverlay />)).toBeTruthy();
  });
});
