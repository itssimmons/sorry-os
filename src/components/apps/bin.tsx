"use client";

import App from "@/components/ui/app";

const BinApp = () => {
  return (
    <App.Grid>
      <App.Envelope>
        <App.Ico src="/os/270.ico" />
        <App.Title>Cesta</App.Title>
      </App.Envelope>
      <App.Window width={500} height={500}>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Fecha de modificación</th>
              <th>Tamaño</th>
              <th>Clase</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bla Bla.mp3</td>
              <td>ayer, 23:59</td>
              <td>1.00 MB</td>
              <td>Audio</td>
            </tr>
            <tr>
              <td>Bla Bla.mp3</td>
              <td>ayer, 23:59</td>
              <td>1.00 MB</td>
              <td>Audio</td>
            </tr>
          </tbody>
        </table>
      </App.Window>
    </App.Grid>
  );
};

export default BinApp;
