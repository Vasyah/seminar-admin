import { HttpError } from "@pankod/refine-core";
import {
  Box,
  TextField,
  Autocomplete,
  useAutocomplete,
  Checkbox,
  Create,
  FormControlLabel,
} from "@pankod/refine-mui";
import { Controller, useForm } from "@pankod/refine-react-hook-form";
import { IUser } from "../../interfaces";
import { SeminarApp } from "../../app/models/app";

export const PostCreate: React.FC = () => {
  const {
    saveButtonProps,
    refineCore: { queryResult, formLoading },
    register,
    control,
    formState: { errors },
  } = useForm<IUser, HttpError, IUser>();

  return (
    <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        // sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
      >
        <TextField
          {...register("name", {
            required: "Поле обязательно для ввода",
          })}
          error={!!errors.name}
          helperText={errors.name?.message}
          margin="normal"
          fullWidth
          label="ФИО"
          name="name"
          // autoFocus
        />
        <Controller
          {...register("town", {
            required: "Поле обязательно для ввода",
          })}
          control={control}
          name="town"
          rules={{ required: "Поле обязательно для ввода" }}
          render={({ field }) => (
            <Autocomplete
              options={SeminarApp.cities}
              {...field}
              onChange={(_, value) => {
                field.onChange(value);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Город"
                  margin="normal"
                  variant="outlined"
                  error={!!errors.town}
                  helperText={errors.town?.message}
                  required
                />
              )}
            />
          )}
        />
        <TextField
          {...register("birthDate", {
            required: "Поле обязательно для ввода",
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
            required: "Поле обязательно для ввода",
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
            pattern: {
              value: /\S+@\S+\.\S+/,
              message:
                "Введенное значение не является адресом электронной почты",
            },
            required: "Поле обязательно для ввода",
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
          margin="normal"
          fullWidth
          label="Email"
          name="email"
          type={"email"}
          autoFocus
        />
        <Controller
          {...register("status", {
            required: "Поле обязательно для ввода",
          })}
          control={control}
          name="status"
          rules={{ required: "Поле обязательно для ввода" }}
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
                  label="Статус"
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
            required: "Поле обязательно для ввода",
          })}
          control={control}
          name="teachers"
          rules={{ required: "Поле обязательно для ввода" }}
          render={({ field }) => {
            return (
              <Autocomplete
                multiple
                options={SeminarApp.teachers}
                {...field}
                onChange={(_, value) => {
                  field.onChange(value);
                }}
                renderInput={(params) => {
                  return (
                    <TextField
                      error={!!errors.teachers}
                      {...params}
                      margin="normal"
                      label="Учителя"
                      helperText={errors.teachers?.message}
                      required
                      placeholder="Учителя"
                    />
                  );
                }}
              />
            );
          }}
        />
        <Controller
          {...register("isCar", {})}
          control={control}
          name="isCar"
          render={({ field }) => (
            <FormControlLabel
              control={<Checkbox {...field} defaultChecked={false} />}
              label="На машине"
              onChange={(_, value) => {
                field.onChange(value);
              }}
            />
          )}
        />{" "}
        <Controller
          {...register("isConcert", {})}
          control={control}
          name="isConcert"
          render={({ field }) => (
            <FormControlLabel
              control={<Checkbox {...field} defaultChecked={false} />}
              label="Участвует в концерте"
              onChange={(_, value) => {
                field.onChange(value);
              }}
            />
          )}
        />
        <Controller
          {...register("isVegan", {})}
          control={control}
          name="isVegan"
          render={({ field }) => (
            <FormControlLabel
              control={<Checkbox {...field} defaultChecked={false} />}
              label="Веган"
              onChange={(_, value) => {
                field.onChange(value);
              }}
            />
          )}
        />
        <TextField
          {...register("comment")}
          error={!!errors.comment}
          helperText={errors.comment?.message}
          margin="normal"
          fullWidth
          label="Комментарий"
          name="comment"
        />
      </Box>
    </Create>
  );
};
