import { getGifs } from "../../src/helpers/getGifs"

describe('pruebas en GetGifs(', () => {
    test('should provide the gifs',async () => {
      const gifs = await getGifs ('One Punch')
      expect (gifs.length).toBeGreaterThan(0);
      expect(gifs[0]) .toEqual({
        id:expect.any(String),
        title:expect.any(String),
        urls:expect.any(String),
      })
    })
    
  
})
