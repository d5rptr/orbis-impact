declare module "aos" {
  const AOS: {
    init: (options?: { duration?: number; once?: boolean }) => void;
  };
  export default AOS;
}
