const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {year}{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-display font-semibold">
            Raja Raman
          </span>
          . All rights reserved.
        </p>
        <div className="flex gap-6">
          {["About", "Projects", "Contact"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(`#${label.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
