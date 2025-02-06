"use client";

import {
  AppEnvelope,
  AppGrid,
  AppIco,
  AppTitle,
  AppWindow,
} from "@/components/ui/app";

const BinApp = () => {
  return (
    <AppGrid>
      <AppEnvelope>
        <AppIco src="/os/270.ico" />
        <AppTitle>Cesta</AppTitle>
      </AppEnvelope>
      <AppWindow width={500} height={500}>
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
      </AppWindow>
    </AppGrid>
  );
};

export default BinApp;
