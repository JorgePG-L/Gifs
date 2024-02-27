

import { render, screen } from "@testing-library/react";
import GifItem from "../src/components/GifItem";

test('should validate snapshot', () => {
    const title = "Saitama";
     const url  = "hhtps://one-punch.com/saitama.jpg";

    const {container} = render(<GifItem title = {title} url = {url} />);
  
    // Utiliza expect junto con toMatchSnapshot
    expect(container).toMatchSnapshot();
})

test('should debe mostrar la imagen con la url y el alt indicado', () => {
    const title = "Saitama";
    const url  = "hhtps://one-punch.com/saitama.jpg";
  render ( <GifItem title = {title} urls = {url} /> );

  const {src,alt} = screen.getByRole('img');

  expect (src).toBe(url);
  expect (alt).toBe(alt);
})

test('should render the title in the component', () => {
    const title = "Saitama";
    const url  = "hhtps://one-punch.com/saitama.jpg";
  render ( <GifItem title = {title} urls = {url} /> );
  expect ( screen.getByText(title)).toBeTruthy();
})
