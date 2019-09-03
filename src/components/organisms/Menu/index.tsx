import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Label from '../../atoms/Label';
import Ul from './styles';

interface SubMenu {
  label: string;
  path: string;
}

interface Menu {
  label: string;
  path?: string;
  subMenu?: SubMenu[];
}

const Menu: React.FC = () => {
  const menus: Menu[] = [
    { label: 'Top', path: '/top' },
    { label: 'Props', path: '/props' },
    { label: 'State', path: '/state' },
    {
      label: 'Redux',
      subMenu: [
        { label: 'Sample1', path: '/redux/sample1' },
        { label: 'Sample2', path: '/redux/sample2' },
        { label: 'Sample3', path: '/redux/sample3' }
      ]
    }
  ];

  return (
    <Ul>
      {menus.map(({ label, path, subMenu }) => (
        <li key={label}>
          {path !== undefined ? (
            <NavLink className="nav-link" to={path}>
              {label}
            </NavLink>
          ) : (
            <Label isCursorPointer={true}>{label}</Label>
          )}
          {subMenu && (
            <ul className="sub-menu">
              {subMenu.map(({ label: label2, path: path2 }) => (
                <li key={label2}>
                  <NavLink className="nav-link" to={path2}>
                    {label2}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </Ul>
  );
};

export default Menu;
