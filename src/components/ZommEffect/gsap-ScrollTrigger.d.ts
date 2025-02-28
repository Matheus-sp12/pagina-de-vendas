declare module 'gsap/ScrollTrigger' {
    import { Plugin } from 'gsap';
    export const ScrollTrigger: Plugin & { getAll: () => ScrollTrigger[] };
    export default ScrollTrigger;
}
