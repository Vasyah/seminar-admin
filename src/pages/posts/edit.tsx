import { HttpError } from "@pankod/refine-core";
import {
  Edit,
  Box,
  TextField,
  Autocomplete,
  useAutocomplete,
  Checkbox,
} from "@pankod/refine-mui";
import { Controller, useForm } from "@pankod/refine-react-hook-form";
import { IUser } from "../../interfaces";
import { SeminarApp } from "../../app/models/app";

export const PostEdit: React.FC = () => {
  const {
    saveButtonProps,
    refineCore: { queryResult },
    register,
    control,
    formState: { errors },
  } = useForm<IUser, HttpError, IUser>();

  return (
    <div>
      <Edit saveButtonProps={saveButtonProps} canDelete>
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
                {...field}
                options={SeminarApp.cities}
                onChange={(_, value) => {
                  field.onChange(value);
                }}
                renderInput={(params) => (
                  <TextField
                    defaultValue={field.value}
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
              required: "Поле обязательно для ввода",
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
            margin="normal"
            fullWidth
            label="Email"
            name="email"
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
          <div>
            <label htmlFor="isCar">На машине</label>
            <Controller
              control={control}
              name="isCar"
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState,
              }) => (
                <>
                  <Checkbox
                    defaultChecked={value}
                    onBlur={onBlur} // notify when input is touched
                    onChange={onChange} // send value to hook form
                    checked={value}
                    inputRef={ref}
                  />
                </>
              )}
            />
          </div>
          <div>
            <label htmlFor="isConcert">Участвует в концерте</label>
            <Controller
              control={control}
              name="isConcert"
              render={({
                field: { onChange, onBlur, value, name, ref },
              }) => (
                <>
                  <Checkbox
                    onBlur={onBlur} // notify when input is touched
                    onChange={onChange} // send value to hook form
                    checked={value}
                    inputRef={ref}
                  />
                </>
              )}
            />
          </div>
          <div>
            <label htmlFor="isVegan">Веган</label>
            <Controller
              control={control}
              name="isVegan"
              render={({
                field: { onChange, onBlur, value, name, ref },
              }) => (
                <Checkbox
                  onBlur={onBlur} // notify when input is touched
                  onChange={onChange} // send value to hook form
                  checked={value}
                  inputRef={ref}
                />
              )}
            />
          </div>

          <TextField
            {...register("comment")}
            error={!!errors.name}
            helperText={errors.name?.message}
            margin="normal"
            fullWidth
            label="Комментарий"
            name="comment"
          />
        </Box>
      </Edit>
    </div>
  );
};
