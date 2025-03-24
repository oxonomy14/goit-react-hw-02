import css from "./Profile.module.css";
export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profile}>
      <div className={css.profileInfo}>
        <img src={image} alt={name} width={512} />
        <p className={css.profileInfoName}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.profileList}>
        <li className={css.profileItem}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.profileItem}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.profileItem}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
