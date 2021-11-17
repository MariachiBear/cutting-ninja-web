const breakpoints = useBreakpoints({
   sm: '640px',
   md: '768px',
   lg: '1024px',
   xl: '1280px',
   '2xl': '1536px',
   '3xl': '2000px',
   '4xl': '2560px',
   '5xl': '3000px',
   '4k': '3840px',
});

export const siteBreakpoints = {
   sm: breakpoints.smaller('md'),
   md: breakpoints.between('md', 'lg'),
   lg: breakpoints.between('lg', 'xl'),
   xl: breakpoints.between('xl', '2xl'),
   '2xl': breakpoints.between('2xl', '3xl'),
   '3xl': breakpoints.between('3xl', '4xl'),
   '4xl': breakpoints.between('4xl', '5xl'),
   '5xl': breakpoints.between('5xl', '4k'),
   '4k': breakpoints.greater('4k'),
};

export const currentBreakpoint = computed(() => {
   const index = Object.values(siteBreakpoints).findIndex((val) => val.value);
   return Object.keys(siteBreakpoints)[index];
});
