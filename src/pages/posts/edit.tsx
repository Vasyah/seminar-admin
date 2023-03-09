import { HttpError } from "@pankod/refine-core";
import {
  Edit,
  Box,
  TextField,
  Autocomplete,
  useAutocomplete,
  Chip,
  Checkbox,
} from "@pankod/refine-mui";
import { Controller, useForm } from "@pankod/refine-react-hook-form";
import { IUser } from "../../interfaces";

const teachers: string[] = [
  "Кузьмина Лариса Алексеевна",
  "Румянцева Людмила Петровна",
  "Румянцев Сергей Борисович",
  "Румянцев Алексей Борисович",
  "Подвиженко Татьяна Ивановна",
  "Смолина Надежда Борисовна",
  "Шагалина Эльмира Хабибовна",
  "Ступакова Ольга Петровна",
  "Епифанцева Елена Романовна",
  "Ким Сэн Хи\n",
  "Черепанов Сергей Васильевич",
  "Король Валерий Юрьевич",
  "Погонышева Татьяна Владимировна",
  "Бернадские Игорь Чаславович и Тамара Борисовна",
  "Митрясова Лилия Витальевна",
  "Ивановы Дмитрий Юрьевич и Ольга Владимировна",
  "Внукова Ольга Степановна",
  "Фуфаева Валентина Николаевна",
  "Коростылёв Александр Валерьевич",
  "Кузнецова Алла Александровна",
  "Коваленковы Владимир и Евгения",
  "Небесный Игорь Викторович",
  "Крылова Ольга Николаевна",
];

export const PostEdit: React.FC = () => {
  const {
    saveButtonProps,
    refineCore: { queryResult },
    register,
    control,
    formState: { errors },
  } = useForm<IUser, HttpError, IUser>();

  const { autocompleteProps } = useAutocomplete<IUser>({
    resource: "users",
    defaultValue: queryResult?.data?.data?.id,
  });

  return (
    <Edit saveButtonProps={saveButtonProps} canDelete>
      <Box
        component="form"
        // sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
      >
        <TextField
          {...register("name", {
            required: "This field is required",
          })}
          error={!!errors.name}
          helperText={errors.name?.message}
          margin="normal"
          fullWidth
          label="ФИО"
          name="name"
          // autoFocus
        />
        <TextField
          {...register("birthDate", {
            required: "This field is required",
          })}
          error={!!errors.birthDate}
          helperText={errors.birthDate?.message}
          margin="normal"
          fullWidth
          label="Дата рождения"
          name="birthDate"
          autoFocus
        />
        <TextField
          {...register("phone", {
            required: "This field is required",
          })}
          error={!!errors.phone}
          helperText={errors.phone?.message}
          margin="normal"
          fullWidth
          label="Номер телефона"
          name="phone"
          autoFocus
        />
        <TextField
          {...register("email", {
            required: "This field is required",
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
          margin="normal"
          fullWidth
          label="Email"
          name="email"
          autoFocus
        />
        {/*<TextField*/}
        {/*  {...register("teachers", {*/}
        {/*    required: "This field is required",*/}
        {/*  })}*/}
        {/*  error={!!errors.teachers}*/}
        {/*  helperText={errors.teachers?.message}*/}
        {/*  margin="normal"*/}
        {/*  fullWidth*/}
        {/*  label="Учителя"*/}
        {/*  name="teachers"*/}
        {/*  autoFocus*/}
        {/*/>*/}
        <Controller
          {...register("status", {
            required: "This field is required",
          })}
          control={control}
          name="status"
          rules={{ required: "This field is required" }}
          defaultValue={null as any}
          render={({ field }) => (
            <Autocomplete
              options={["Ученик", "Учитель"]}
              {...field}
              onChange={(_, value) => {
                field.onChange(value);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Вы"
                  margin="normal"
                  variant="outlined"
                  error={!!errors.status}
                  helperText={errors.status?.message}
                  required
                />
              )}
            />
          )}
        />
        <Controller
          {...register("teachers", {
            required: "This field is required",
          })}
          control={control}
          name="teachers"
          rules={{ required: "This field is required" }}
          render={({ field }) => {
            console.log(field);
            return (
              <Autocomplete
                multiple
                defaultValue={field.value}
                options={teachers}
                {...field}
                onChange={(_, value) => {
                  field.onChange(value);
                }}
                // renderTags={(value, getTagProps) =>
                //   value.map((option, index) => (
                //     <Chip
                //       variant="outlined"
                //       label={option}
                //       size="small"
                //       {...getTagProps({ index })}
                //     />
                //   ))
                // }
                renderInput={(params) => {
                  console.log(params);
                  return (
                    <TextField
                      {...params}
                      // variant="filled"
                      label="Учителя"
                      placeholder="Учителя"
                    />
                  );
                }}
              />
            );
          }}
        />
      </Box>
    </Edit>
  );
};
