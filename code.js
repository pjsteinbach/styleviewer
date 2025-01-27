document.querySelectorAll('input[name="palettes"]').forEach(input => {
    input.addEventListener('change', function() {
        const themeIndex = this.value;
        const selectedTheme = pallete[themeIndex];
        for (const [key, value] of Object.entries(selectedTheme)) {
            document.documentElement.style.setProperty(`--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`, value);
        }
    });
});

document.querySelectorAll('input[name="font-family"]').forEach((input) => {
    input.addEventListener('change', (event) => {
        const selectedValue = event.target.value;
        const selectedFont = fontFamily[selectedValue];

        document.documentElement.style.setProperty('--tittle-font', selectedFont.tittleFont);
        document.documentElement.style.setProperty('--body-font', selectedFont.bodyFont);
    });
});

const pallete = [
    {
        darkColor: '#343149',
        darkGrayColor: '#615f6d',
        secondaryColor: '#ac6a65',
        primaryColor: '#ffa763',
        lightGrayColor: '#e8ded9',
        lightColor: '#faf8f2'
    },

    {
        darkColor: '#31363f',
        darkGrayColor: '#5e636e',
        secondaryColor: '#b28484', //da7777
        primaryColor: '#6cbcc2',
        lightGrayColor: '#c0cdce',
        lightColor: '#f7f1f1'
    },

    {
        darkColor: '#191d26',
        darkGrayColor: '#494e5b',
        secondaryColor: '#6983a6',
        primaryColor: '#31abdc',
        lightGrayColor: '#c0d1d8',
        lightColor: '#ecf2f9'
    },

    {
        darkColor: '#202031',
        darkGrayColor: '#47413d',
        secondaryColor: '#806b60',
        primaryColor: '#d4a379',
        lightGrayColor: '#cdc9c1',
        lightColor: '#f5efe9'
    },

    {
        darkColor: '#2a2727',
        darkGrayColor: '#3c4e48',
        secondaryColor: '#416561',//218262
        primaryColor: '#04c8c1',
        lightGrayColor: '#bbc8c8',
        lightColor: '#f5f4f4'
    },

    {
        darkColor: '#383838',
        darkGrayColor: '#6e695e',
        secondaryColor: '#689c6f',//40ab4f
        primaryColor: '#ffbb3b',//eab148
        lightGrayColor: '#bbb8b1',
        lightColor: '#ebe7e0'
    },

    {
        darkColor: '#283e30',
        darkGrayColor: '#435650',
        secondaryColor: '#497246',
        primaryColor: '#7a9f4c',
        lightGrayColor: '#bbc3b4',
        lightColor: '#e8ebe4'
    },

    {
        darkColor: '#242424',
        darkGrayColor: '#4c3942',
        secondaryColor: '#915666', //d23762
        primaryColor: '#ec4574', //f16089
        lightGrayColor: '#cec0c0',
        lightColor: '#f7eded'
    }
]

const fontFamily = [
    {
        tittleFont: 'Abril Fatface',
        bodyFont: 'Lato'
    },

    {
        tittleFont: 'DM Serif Display',
        bodyFont: 'DM Sans'
    },
    
    {
        tittleFont: 'Roboto',
        bodyFont: 'Poppins'
    },
    
    {
        tittleFont: 'Montserrat',
        bodyFont: 'Lora'
    },

    {
        tittleFont: 'Oswald',
        bodyFont: 'Newsreader'
    },
    
    {
        tittleFont: 'Dosis',
        bodyFont: 'Blinker'
    },
    
    {
        tittleFont: 'Merriweather',
        bodyFont: 'Inconsolata'
    },
    
    {
        tittleFont: 'Open Sans',
        bodyFont: 'Domine'
    }
]