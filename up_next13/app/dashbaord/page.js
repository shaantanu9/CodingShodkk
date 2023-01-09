export default function dashboard({ children }) {
  return (
    <html>
      <head>
        <title>Up Next</title>
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
