// Импортируем иконки
export const icons = import.meta.glob('../../assets/svg/icons/*.svg', {
  eager: true,
  as: 'raw',
});
