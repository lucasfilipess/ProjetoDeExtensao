import React, { useState, useEffect, forwardRef } from 'react';
import { Container, StyledFocus, StyledInput } from './styles.module.scss';
import MaterialTable from 'material-table';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import UpdateSupervisor from '../../Admin/Supervisor/Update';
import UpdateAccompanied from '../../Patient/Accompanied/Update';
// import UpdateClass from '../../Admin/Class/Update';
import UpdateServiceArea from '../../Admin/ServiceArea/Update';
import UpdateAvailability from '../../Supervisor/Availability/Update';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => (
    <DeleteOutline color={'#757575'} {...props} ref={ref} />
  )),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

export default function MaterialTableDemo({
  rows,
  columnsName,
  title,
  deleteBtn,
  availability,
  patient,
  supervisor,
  classData,
  serviceArea,
}) {
  const [state, setState] = useState({
    columns: columnsName,
    data: rows,
  });
  useEffect(() => {
    setState((oldState) => ({ ...oldState, data: rows }));
  }, [rows]);

  return (
    <>
      <MaterialTable
        width="100%"
        icons={tableIcons}
        title={title}
        options={{
          search: true,
        }}
        columns={state.columns}
        data={state.data}
        actions={[
          {
            icon: DeleteIcon,
            tooltip: 'Apagar',
            onClick: (event, rows) => {
              deleteBtn(
                window.confirm(`Deseja desativar ${rows.name} do sistema ?`),
                patient ? rows.id_accompanying : rows.id
              );
            },
          },
        ]}
        detailPanel={[
          {
            tooltip: 'Editar',
            icon: EditIcon,
            render: (rows) => {
              return (
                <>
                  {supervisor && <UpdateSupervisor data={rows} />}
                  {patient && <UpdateAccompanied data={rows} />}
                  {/* {classData && <UpdateClass data={rows} />} */}
                  {serviceArea && <UpdateServiceArea data={rows} />}
                  {availability && <UpdateAvailability data={rows} />}
                </>
              );
            },
          },
        ]}
      />
    </>
  );
}
