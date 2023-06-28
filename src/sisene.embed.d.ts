interface SisenseEmbed {
    SisenseFrame: any;
    emus: any;
  }
  
  interface CustomWindow extends Window {
    'sisense.embed': SisenseEmbed;
  }
  