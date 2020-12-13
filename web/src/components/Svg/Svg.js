const Svg = ({ name, className: className2, strokeWidth = 2 }) => {
  const svgs = {
    'arrow-down': (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    ),
    'arrow-left': (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
    ),
    'chevron-down': (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    ),
    'dots-vertical': (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
        />
      </svg>
    ),
    'exclamation-circle': (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    favicon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2667 2667">
        <defs>
          <clipPath clipPathUnits="userSpaceOnUse" id="a">
            <path d="M0 2000h2000V0H0z" />
          </clipPath>
        </defs>
        <g
          clipPath="url(#a)"
          transform="matrix(1.33333 0 0 -1.33333 0 2666.667)"
        >
          <path d="M1016.354 1943.102c-20.336.03-40.674-.164-61.008-.39-16.776-.187-33.526-1.129-50.292-3.016-17.564-1.98-26.922-10.195-31.505-27.258-15.032-55.991-30.791-111.79-40.247-169.09-1.022-6.195-3.045-9.3-9.746-10.48-14.416-2.536-28.536-6.749-41.877-12.775-6.933-3.133-10.564-1.342-14.94 4.12-19.325 24.13-39.346 47.69-60.893 69.888-19.273 19.857-37.81 40.369-55.936 61.27-18.472 21.3-26.606 23.133-52.187 11.216-9.325-4.346-18.43-9.189-27.487-14.08-35.852-19.359-69.339-42.418-102.637-65.767-7.987-5.599-15.71-11.841-24.369-16.16-24.106-12.025-23.159-25.322-18.869-42.695 13.234-53.613 23.937-108.013 45.38-159.255 3.051-7.295 1.054-10.513-4.48-14.582-13.625-10.028-24.994-22.487-35.46-35.677-8.079-10.184-15.865-20.644-23.092-31.442-4.935-7.37-8.778-10.536-19.311-7.803-48.24 12.513-96.96 23.167-145.44 34.77-13.724 3.284-24.494-.918-33.47-11.07-7.589-8.582-13.215-18.528-19.023-28.312-22.408-37.745-42.83-76.667-67.274-113.202-7.272-10.868-7.528-22.246-2.654-34.08 4.19-10.167 10.694-18.826 17.564-27.233 31.643-38.716 65.861-74.973 104.112-107.234 5.189-4.376 7.569-8.182 6.2-15.014-3.84-19.187-5.257-38.702-5.647-58.213-.146-7.212-2.706-10.507-9.233-12.927-36.21-13.425-69.922-31.962-103.386-51.011-19.306-10.989-38.608-22.018-59.725-29.385-14.21-4.963-21.708-15.44-23.923-30.104-1.386-9.165-1.605-18.33-1.11-27.572 2.21-41.187 8.938-81.922 12.345-122.988.582-6.99 2.022-13.99 6.149-20.027 15.34-22.433 27.736-46.612 39.842-70.786 10.611-21.195 26.25-35.388 47.745-43.997 7.54-3.02 14.984-6.322 22.658-8.942 41.007-13.998 82.066-27.837 123.125-41.674 4.084-1.377 8.522-1.86 11.788-5.25-.808-1.977-1.514-4.028-2.455-5.963-6.638-13.646-13.556-27.134-21.865-39.88-26.377-40.465-45.807-84.834-70.74-126.117-6.31-10.448-4.295-20.839 1.593-30.793 5.005-8.466 11.614-15.661 18.456-22.637 26.203-26.718 52.903-52.95 77.89-80.838 5.9-6.588 12.537-12.055 21.42-13.963 4.388-.946 7.88-3.497 11.607-5.684 18.23-10.689 36.933-20.653 54.568-32.249 15.888-10.445 31.022-10.538 47.517-2.3 19.383 9.68 39.942 17.259 58.475 28.298 16.562 9.864 30.107 8.222 44.317-2.897 4.678-3.662 9.943-6.576 14.973-9.78 18.299-11.647 36.789-22.917 56.927-31.253 14.912-6.173 14.854-6.369 14.25-21.822-1.2-30.905-1.113-61.766.767-92.681 1.547-25.425 14.359-40.484 37.66-49.39 30.41-11.625 61.56-20.829 92.428-30.977 14.82-4.872 27.616-2.473 40.137 5.411 4.585 2.884 9.026 6.014 13.384 9.23 28.354 20.92 56.697 41.856 84.978 62.88 8.052 5.986 16.944 9.202 26.919 10.387 44.884 5.325 89.81 4.549 134.79 1.677 18.416-1.175 34.823-6.83 49.088-18.905 8.676-7.343 18.067-13.852 27.214-20.631 18.734-13.873 37.421-27.816 56.319-41.464 14.335-10.355 29.287-14.277 47.259-8 26.061 9.103 52.828 16.207 78.704 25.958 41.54 15.652 47.204 23.433 49.916 67.532 1.633 26.57 1.481 53.11-.21 79.67-.933 14.7-.782 14.86 11.969 20.163 15.556 6.467 30.496 14.04 44.7 23.118 13.244 8.463 26.708 16.57 40.001 24.955 7.876 4.967 15.092 6.127 24.173 1.308 18.166-9.637 37.898-16.48 55.538-26.919 25.432-15.042 47.788-14.28 72.058 3.34 18.671 13.553 38.944 25.507 61.07 33.429 5.788 2.07 9.992 6.427 14 10.866 25.82 28.593 53.202 55.678 80.182 83.146 6.475 6.59 12.56 13.531 17.207 21.563 6.55 11.316 6.87 22.423-.734 33.613-4.554 6.709-8.88 13.667-12.425 20.944-17.83 36.58-37.868 71.918-59.272 106.497-7.994 12.917-14.942 26.357-21.799 42.132 4.595 1.615 8.081 2.972 11.644 4.077 41.92 12.997 83.337 27.471 124.703 42.109 11.758 4.164 23.213 9.007 34.258 14.862 13.301 7.053 23.396 16.87 30.756 30.262 14.612 26.576 27.86 53.94 44.69 79.272 3.688 5.551 4.99 11.972 5.669 18.482 4.116 39.36 8.248 78.721 12.226 118.097 1.258 12.459 1.162 24.907-1.81 37.207-2.707 11.193-8.45 20.24-19.502 24.331-33.259 12.31-62.664 32.023-94.028 47.948-18.706 9.5-33.548 20.775-44.597 39.876-17.405 30.09-38.544 36.14-71.705 26.429-20.852-6.107-41.777-10.408-63.805-11.025-57.652-1.603-88.583 31.968-104.451 70.212-8.59 20.699-12.955 42.4-15.743 64.542-2.436 19.328-3.499 38.861-9.193 57.724-5.825 19.27-17.44 32.012-37.594 36.362-5.808 1.254-11.355 3.71-17.155 4.999-7.403 1.638-12.138 6.025-16.476 12.072-10.023 13.96-14.868 30.024-20.049 45.976-6.072 18.703-14.155 36.173-26.668 51.656-14.988 18.545-33.868 28.092-57.672 28.19-11.386.045-22.752.35-34.015 2.529-21.142 4.094-26 9.948-27.553 35.043-.13 2.111.615 4.277.921 6.421 2.854 19.847 5.38 39.747 8.681 59.515 1.681 10.063.397 19.192-3.745 28.427-6.872 15.314-13.497 30.757-19.536 46.41-3.08 7.985-7.572 14.066-14.94 18.42-26.154 15.448-52.89 29.572-83.108 35.279-9.492 1.794-14.32 5.328-16.031 16.123-9.084 57.352-25.146 113.099-40.631 168.964-3.621 13.062-11.45 20.427-24.855 22.083-10.755 1.329-21.43 3.054-32.323 3.417-20.335.677-40.668.932-61.004.962zm-4.788-684.402c25.976-.223 52.054-5.017 78.144-15.208 84.977-33.198 133.54-96.624 150.563-185.305 2.66-13.862 4.118-27.884 3.406-39.595-.573-127.966-91.857-232.178-215.784-248.785-143.014-19.162-268.77 84.852-274.968 228.585-3.573 82.8 38.433 192.186 159.149 240.238 32.863 13.081 66.092 20.357 99.49 20.07z" />
          <path
            d="M984.352 1609.92c-50.418-.26-95.663-15.112-134.633-50.195-20.15-18.143-38.404-38.243-55.088-59.733-36.278-46.733-81.34-82.372-135.565-106.242-28.293-12.454-57.059-23.733-86.143-34.21-26.554-9.568-52.66-20.27-77.31-34.09-34.484-19.335-60.795-46.858-79.416-81.674-14.049-26.263-17.9-54.274-13.76-83.592 3.193-22.62 9.18-44.575 15.496-66.46 9.736-33.711 13.271-68.047 9.96-102.991-2.044-21.588-4.604-43.126-6.76-64.701-2.318-23.203-5.039-46.429-1.35-69.74 2.132-13.457 5.122-26.786 13.086-38.132 8.82-12.57 20.07-12.571 29.086-.332 4.86 6.598 7.863 14.23 10.458 21.95 3.573 10.63 9.9 19.37 18.6 26.142 6.76 5.26 14.16 9.92 24.847 6.403-2.152-8.093-8.355-13.068-11.976-19.437-3.022-5.32-3.71-9.576.704-14.641 11.157-12.8 14.76-28.59 17.007-44.925 2.527-18.344 2.669-36.756 2.676-55.199.016-32.54-.242-65.085.188-97.62.24-17.907 1.958-35.788 7.889-52.877 8.784-25.324 25.362-37.703 51.987-39.127 9.746-.521 19.512-.775 29.268-1.062 31.791-.933 52.556-17.947 65.508-45.63 7.853-16.786 12.337-34.653 14.715-53.067 4.625-35.835-.747-71.485-2.297-107.164-.855-19.64-.602-39.018 2.473-58.328 1.893-11.875 5.674-23.112 14.826-31.866 11.89-11.374 24.496-11.104 34.921 1.54 6.968 8.45 11.826 18.242 15.032 28.66 4.622 15.017 8.82 30.166 12.927 45.334 4.713 17.413 11.196 34.051 21.832 48.711 14.882 20.516 34.695 24.916 56.894 12.923 12.4-6.7 24.538-13.888 36.957-20.55 29.664-15.91 59.595-17.908 90.267-2.259 12.745 6.502 24.435 14.295 34.173 24.557 20.443 21.552 45.932 36.12 70.5 51.918 19.209 12.35 40.311 14.947 62.526 9.627 3.61-.863 7.338-3.365 12.023-1.85-4.62 8.827-10.581 14.89-17.921 19.816-7.018 4.713-15.13 6.576-24.855 8.692 16.535 6.102 25.63 5.664 38.858-2.101 20.8-12.21 33.402-30.509 38.482-53.971 5.524-25.498 7.72-51.425 9.547-77.389 1.115-15.812 3.454-31.346 12.732-44.796 10.825-15.694 31.335-23.173 47.067-15.367 17.076 8.472 29.689 21.875 32.492 41.785 4.99 35.44 7.92 71.07 9.307 106.858.863 22.247 4.005 44.3 11.59 65.427 6.393 17.814 18.885 30.122 35.876 37.86 6.016 2.74 12.518 4.566 19.864.766-23.18-21.18-23.356-21.4-26.809-33.882 7.476 1.721 14.81 3.373 22.127 5.102 23.858 5.636 47.435 12.618 67.717 26.68 56.57 39.219 78.887 94.246 72.563 161.89-1.462 15.649-3.307 31.278-4.268 46.96-2.575 41.895 7.486 81.777 19.864 121.286 8.43 26.894 17.349 53.632 24.309 80.982 6.822 26.799 2.97 51.343-12.352 74.539-11.99 18.153-25.365 35.201-39.039 52.028-12.954 15.939-20.606 33.893-25.216 53.898-8.148 35.36-15.787 71.03-27.14 105.413-17.917 54.27-47.44 99.641-104.85 120.71-22.068 8.098-40.933 21.99-57.465 38.98-21.706 22.305-40.042 47.222-55.751 73.857-25.148 42.64-60.399 74.481-100.957 101.912-35.498 24.006-73.317 38.084-116.38 41.232-7.41.542-14.718.8-21.92.763zm27.214-351.22c25.976-.223 52.054-5.017 78.144-15.208 84.977-33.198 133.54-96.624 150.563-185.305 2.66-13.862 4.118-27.884 3.406-39.595-.573-127.966-91.857-232.178-215.784-248.785-143.014-19.162-268.77 84.852-274.968 228.585-3.573 82.8 38.433 192.186 159.149 240.238 32.863 13.081 66.092 20.357 99.49 20.07z"
            fill="#df5ca0"
          />
          <path
            d="M1004.489 1915.195c-28.166 0-56.331-1.065-84.495-3.185-16.407-1.235-16.644-1.427-20.974-16.937a92271.722 92271.722 0 01-42.729-153.468c-.397-1.435-.596-3.19 2.323-5.308 13.092-1.402 28.54.566 41.94-10.214-69.925-22.116-139.42-44.623-210.897-66.736 16.824 18.764 36.552 31.467 56.046 43.646-.876 2.406-.968 3.628-1.622 4.32-39.142 41.359-78.448 82.568-117.393 124.113-5.453 5.815-9.974 6.45-16.897 3.063-51.313-25.09-99.279-55.634-145.96-88.362-5.22-3.658-7-7.403-5.145-13.616 2.79-9.338 4.832-18.897 7.29-28.338 10.914-41.912 21.86-83.817 33.208-127.312 19.192 8.726 36.593 16.407 55.42 19.54 5.896.98 14.728 5.097 17.39-1.541 2.419-6.042-6.945-8.318-11.633-11.162-18.55-11.248-37.45-21.943-54.25-35.806-38.984-32.159-68.648-72.11-95.185-114.599-8.9-14.252-17.07-28.954-25.85-43.285-2.65-4.325-4.514-9.924-12.607-10.918-4.333 25.171 4.924 47.665 12.662 70.82-12.413 4.693-24.64 3.143-36.175 5.702-33.862 7.522-67.85 14.51-101.561 22.64-9.434 2.277-14.929.877-20.218-7.435-25.04-39.348-49.103-79.286-73.102-119.273-4.27-7.116-3.652-12.789.815-19.337 28.915-42.395 66.18-76.997 103.563-112.822 7.72 13.616 14.527 26.467 22.123 38.833 11.895 19.36 20.165 26.286 32.508 28.168-.491-9.074-5.404-16.427-8.537-24.298-9.603-24.137-22.24-47.228-26.285-73.282-4.495-28.92-8.86-57.86-11.158-87.08-1.915-24.347-3.018-48.706-3.152-73.12-.015-3.092.426-7.117-3.885-7.751-3.716-.551-6.029 2.33-7.184 5.47-2.05 5.571-3.617 11.32-5.466 16.967-4.046 12.36-2.37 25.824-6.842 38.176-6.061-.986-10.32-4.559-15.072-7.047-43.698-22.909-85.084-50.107-129.892-70.872-12.934-5.994-17.753-13.832-16.565-27.579 3.405-39.423 6.432-78.87 10.896-118.207 1.198-10.559 5.835-15.037 15.334-17.56 51.663-13.732 104.401-23.097 155.71-39.028-2.004 54.73-1.242 61.503 8.322 70.189 3.146-15.727 5.723-31.15 9.359-46.319 12.345-51.524 33.289-99.67 59.187-145.66 18.082-32.11 37.254-63.605 55.777-95.47 1.729-2.974 5.346-5.954 1.607-11.397-28.414 15.343-46.57 41.934-69.21 64.915-26.891-53.059-55.097-103.676-79.772-156.137-4.447-9.456-1.237-15.178 4.666-21.552 25.8-27.848 51.755-55.56 77.042-83.872 7.735-8.661 15.118-9.606 25.81-6.38 51.069 15.405 99.24 37.8 147.563 59.868 1.354.617 2.306 2.107 3.8 3.531-8.721 13.176-20.948 24.424-21.696 42.283 54.406-46.821 115.006-82.735 181.35-113.442 2.919 29.819 4.954 57.78.895 85.819-1.867 12.88-5.254 25.525-10.284 37.56-9.172 21.946-24.483 35.307-49.676 34.598-7.575-.214-15.191.251-22.758.822-28.98 2.189-51.636 15.201-67.086 40.037-7.838 12.602-12.255 26.53-14.6 41.107-5.038 31.31-3.423 62.698-1.066 94.112 2.358 31.399 3.091 62.846 1.327 94.3-.495 8.885-1.167 17.89-7.39 26.458-3.722-6.834-6.447-12.726-9.952-18.116-15.544-23.883-41.9-28.444-64.705-11.512-9.9 7.348-16.326 17.255-21.36 28.224-11.878 25.888-13.997 53.356-12.102 81.2 1.51 22.166 4.172 44.253 6.487 66.36 4.726 45.16 4.426 89.758-11.032 133.386-5.405 15.25-8.648 31.352-11.862 47.27-11.064 54.806.804 104.454 35.18 148.492 25.075 32.126 55.541 57.685 92.873 74.771 26.656 12.2 53.724 23.28 81.716 32.006 32.614 10.166 64.897 21.272 96.8 33.499 6.071 2.327 12.116 4.493 17.169 8.942 28.897 25.455 57.924 50.682 80.274 82.604 14.343 20.48 31.345 38.927 49.762 55.759 32.252 29.486 69.576 49.385 113.028 57.425 33.508 6.197 66.828 5.091 100.353.645 23.948-3.178 46.734-9.672 67.683-21.74 29.187-16.815 56.882-35.84 82.674-57.558 23.004-19.37 42.29-41.919 58.46-67.281 9.324-14.62 19.442-28.736 29.102-43.142 21.968-32.75 49.87-58.434 86.762-73.617 4.987-2.054 9.553-5.121 14.387-7.575 15.706-7.974 29.149-18.855 40.41-32.29 26.504-31.615 46.126-66.967 55.386-107.392 7.861-34.318 14.93-68.822 21.917-103.331 2.242-11.062 6.86-20.179 15.102-27.992 19.356-18.352 35.723-39.154 50.808-61.2 18.986-27.74 23.816-57.466 17.203-89.894-5.981-29.32-15.544-57.57-25.146-85.778-15.737-46.223-24.052-93.117-19.389-142.266 2.398-25.282 2.563-50.884-1.869-76.253-13.122-75.123-55.185-125.564-127.555-150.254-14.396-4.912-29.286-7.734-44.424-9.518-21.844-2.58-28.334-9.517-29.713-30.848-.873-13.53-1.891-27.058-2.311-40.605-.582-18.75-2.117-37.452-4.553-57.23 13.883 3.256 23.93 9.91 34.524 15.146 57.989 28.663 114.131 60.243 162.027 104.573 2.38 2.202 4.927 4.302 9.23.958-3.231-15.448-14.09-26.922-23.06-39.13 1.019-1.34 1.48-2.576 2.333-2.98 49.544-23.326 99.29-46.116 152.035-61.637 9.207-2.708 15.25-.734 21.456 6.1 25.88 28.51 52.106 56.709 78.203 85.022.737.798 1.388 1.681 2.178 2.418 6.002 5.594 6.342 11.447 2.547 18.832-10.4 20.247-19.884 40.956-30.214 61.24-14.263 28.02-28.916 55.843-43.543 83.673-1.885 3.586-2.064 8.475-7.122 10.568-10.626-11.62-20.758-23.552-31.817-34.556-11.057-11.004-21.048-23.905-40.945-29.315 8.017 14.295 13.757 25.872 20.712 36.665a1083.207 1083.207 0 0145.327 77.108c27.131 50.885 50.045 103.43 59.607 160.877 1.064 6.402 2.459 12.749 3.609 19.138.39 2.181.692 4.456 3.49 4.456 2.534 0 3.51-2.173 4.254-4.143.566-1.492.844-3.153.933-4.759.928-16.736 4.106-33.406 1.227-50.273-.561-3.294-2.745-7.268 1.858-10.745 12.76 5.181 26.245 8.946 39.997 12.072 37 8.402 73.892 17.313 110.721 26.447 16.366 4.059 16.965 5.338 18.714 21.818 2.056 19.405 4.414 38.787 6.027 58.228 1.749 21.067 2.74 42.191 4.169 63.286.526 7.773-1.749 13.429-9.396 17-35.42 16.54-68.435 37.557-102.999 55.655-15.261 7.992-31.004 14.183-39.864 34.442-2.19-22.88 2.622-42.755-9.783-62.01-5.569 28.435-7.43 55.456-14.376 81.329-7.944.929-13.837-2.39-19.753-4.715-24.13-9.489-49.042-13.255-74.89-11.986-51.921 2.546-90.734 26.298-116.147 71.604-12.92 23.035-18.652 48.384-23.07 74.156-3.853 22.436-3.787 45.376-9.308 67.606-2.657 10.707-8.12 16.603-19.58 18.341-18.77 2.849-37.184 7.643-54.62 15.482-35.97 16.167-49.868 39.397-46.96 78.62.48 6.479 1.907 12.886 2.385 19.366 1.427 19.194-7.056 28.527-26.193 28.68-11.376.092-22.772-.775-34.136-.471-17.426.46-33.007 6.562-45.976 18.165-18.36 16.43-33.492 35.535-44.063 57.893-10.239 21.665-13.218 44.457-9.473 68.214 2.81 17.83 7.759 34.958 15.99 50.992 3.198 6.228 2.124 9.545-4.044 12.817-18.638 9.889-36.556 21.07-57.137 27.044-19.24 5.584-38.073 12.475-57.746 16.68-6.907 1.476-14.795 2.4-20.383 10.416 14.597 8.903 30.17 6.557 44.943 8.633-.188 2.295-.073 3.877-.475 5.319a128022.974 128022.974 0 01-42.493 151.85c-4.71 16.799-4.743 16.838-21.663 18.098a1133.49 1133.49 0 01-84.495 3.152z"
            fill="#deaa87"
          />
          <path
            d="M1194.003 281.626c-5.4 1.467-10.868 1.046-16.087-.4-32.71-9.054-66.517-8.855-99.919-11.87-69.949-6.314-139.702-1.326-209.366 5.053-11.266 1.031-22.338 4.137-33.536 6.084-5.646.982-11.336 3.468-18.751.048 10.734-15.387 27.433-20.707 43.009-29.119-5.848-10.335-11.304-20.216-16.985-29.967-18.83-32.312-37.647-64.635-56.66-96.839-6.848-11.597-7.09-11.436-20.41-7.561-25.509 7.423-50.521 16.265-75.393 25.598-13.701 5.141-21.273 13.828-21.774 28.75-1.014 30.097-2.357 60.185-3.59 90.872 4.974-1.739 5.259-5.171 6.416-7.99 2.897-7.06 6.586-13.663 11.349-19.64 25.652-32.17 65.306-31.355 89.204 2.049 14.504 20.269 21.399 43.623 26.215 67.707 3.513 17.582 7.506 34.977 16.802 50.651 8.352 14.082 11.887 15.302 25.742 7.162 10.74-6.311 21.127-13.224 31.683-19.854 51.93-32.624 98.57-25.199 143.081 9.056 11.196 8.616 21.097 18.787 30.046 29.673 11.117 13.525 24.62 24.325 37.7 35.722 24.41 21.27 62.804 15.08 81.808 7.146 4.658-1.943 6.205-5.767 6.784-10.244 1.178-9.132 2.468-18.256 3.296-27.42.632-7.01.705-14.08.889-21.123.762-28.912 3.749-57.279 19.788-82.52l-1.341-1.024"
            fill="#deaa87"
          />
          <path
            d="M1195.344 282.65c4.693-1.986 7.19-6.438 10.753-9.684 23.855-21.73 68.477-28.464 94.483 11.246 5.383 8.216 11.077 16.668 12.67 26.197 2.217 13.229 10.34 17.89 21.932 19.6 2.63.388 5.277.67 7.715.977.81-1.39 1.82-2.308 1.797-3.194-1.472-50.404.345-100.854-2.869-151.262-1.147-18.002-7.581-29.03-24.972-35.08-25.085-8.722-50.143-17.448-75.467-25.47-8.73-2.766-12.693-.164-16.741 6.86-20.589 35.694-41.482 71.214-62.212 106.828-4.069 6.99-7.9 14.119-12.113 21.673 15.573 9.308 33.827 13.9 43.686 30.287.473.3.92.641 1.338 1.021"
            fill="#deaa87"
          />
          <path
            d="M1169.444 147.039c-15.068 11.441-30.352 22.611-45.143 34.4-15.93 12.69-34.172 18.775-54.119 18.984-42.783.453-85.578.516-128.36.048-20.939-.227-40.405-5.602-57.18-19.47-14.571-12.045-30.075-22.96-45.95-34.971-1.57 5.89 2.333 8.736 4.16 12.159 14.008 26.27 28.605 52.241 41.954 78.839 4.062 8.095 8.385 9.368 16.492 8.065 31.58-5.073 63.269-8.063 95.218-2.647 5.773.978 12.008.822 17.801-.162 30.868-5.254 61.472-1.912 92.043 2.336 13.02 1.811 12.88 2.133 18.902-9.024 12.34-22.863 24.804-45.656 37.162-68.507 3.273-6.055 6.35-12.214 9.519-18.327-.833-.573-1.666-1.15-2.499-1.723M638.603 297.595c-23.689 13.596-43.714 25.196-63.852 36.6a958.015 958.015 0 01-31.356 16.978c-10.66 5.52-21.3 5.593-32.775 1.2-23.772-9.104-47.463-18.417-69.783-30.614-12.778-6.983-24.054-7.343-36.23.74-8.961 5.949-18.637 10.82-27.92 16.127.675 5.569 5.313 4.85 8.506 6.077 47.445 18.216 95.553 34.924 139.724 60.629 4.515 2.624 7.444 2.755 11.316-.846 26.178-24.34 58.387-38.935 89.886-54.473 9.65-4.761 14.047-10.184 12.708-21.175-1.1-9.029-.224-18.294-.224-31.243M1372.594 298.789c-5.916 42.25-5.941 42.3 28.845 60.208 24.552 12.642 49.174 25.144 70.135 43.548 4.245 3.73 8.03 6.28 14.154 2.353 30.732-19.706 65.342-31.064 98.761-44.942 15.84-6.578 32.008-12.365 50.216-19.35-14.916-9.442-28.11-17.17-41.995-23.843-7.113-3.417-12.539.295-18.303 3.04-23.443 11.167-47.479 20.966-71.26 31.338-14.927 6.51-28.267 5.418-41.731-2.171-26.862-15.133-53.611-30.468-80.415-45.702-2.277-1.293-4.625-2.468-8.407-4.479M1898.262 797.832c-14.736-24.059-25.027-50.626-53.902-62.357-42.136-17.119-85.3-30.909-128.713-42.665-4.334 3.767-1.15 6.58-.036 9.223 8.863 20.968 16.63 42.317 22.522 64.312 1.338 5 2.445 10.048 9.086 8.913 29.34-5.023 56.811 4.595 84.723 10.629 17.445 3.772 34.81 7.934 52.183 12.04 4.193.992 8.269 2.595 14.137-.095M109.775 799.389c12.726.425 21.387-2.944 30.222-4.894 28.492-6.286 56.723-13.69 85.48-18.85 11.937-2.142 23.724-1.586 35.57-.921 5.164.29 8.224-.768 9.497-6.092 6.044-25.277 16.344-49.122 25.732-73.125-5.503-4.829-10.148-.672-14.16.45-38.552 10.783-76.637 23.015-113.705 38.279-16.532 6.807-30.08 16.666-38.855 32.735-5.639 10.324-12.232 20.128-19.78 32.418M1278.988 1544.95c-16.66 27.946-16.59 67.749-1.349 96.267 9.774-15.501 14.507-31.044 9.379-49.117-4.092-14.436-6.955-29.235-8.03-47.15M1439.672 1379.01c-19.627 13.483-24.461 29.633-17.083 52.64 7.775-9.091 10.397-17.076 17.083-52.64"
            fill="#a05a2c"
          />
          <path
            d="M1011.566 1258.7c-33.398.287-66.627-6.989-99.49-20.07-120.716-48.052-162.722-157.438-159.149-240.238 6.198-143.733 131.954-247.747 274.968-228.586 123.927 16.608 215.21 120.82 215.784 248.786.712 11.71-.746 25.733-3.406 39.595-17.023 88.681-65.586 152.107-150.563 185.305-26.09 10.19-52.168 14.986-78.144 15.209zm-25.519-155.856c1.698 0 3.32-.048 4.855-.103 53.933-.27 100.499-8.484 144.094-30.145 25.992-12.916 49.008-29.685 67.48-52.437 5.129-6.321 7.243-12.568 6.51-20.778-9.32-104.74-94.718-187.684-193.786-196.474-108.084-9.592-204.207 60.298-225.585 168.239-8.118 40.986-11.14 34.344 20.18 65.386 36.787 36.452 83.637 52.853 133.347 62.405 15.432 2.966 31.022 3.994 42.905 3.907z"
            fill="#010000"
          />
          <path
            d="M1282.694 604.44c-27.471 3.364-51.386 11.534-72.914 26.013-4.443 2.99-8.48 6.832-12.028 10.873-13.943 15.883-6.738 36.807 14.122 40.498 6.306 1.117 13.166 1.359 19.411.151 24.398-4.723 46.439-14.431 63.97-32.803 3.81-3.988 7.079-8.326 8.9-13.467 6.163-17.37-5.075-32.29-21.461-31.266"
            fill="#f0c607"
          />
          <path
            d="M677.982 1014.735c-1.112-4.155-1.912-8.428-3.394-12.446-8.72-23.676-22-44.653-39.167-63-12.006-12.83-25.785-15.85-36.243-9.28-9.504 5.972-12.141 16.757-7.068 33.702 6.94 23.195 19.4 43.379 35.847 61.02 5.929 6.357 13.453 10.059 21.877 13.159 15.805 5.813 29.852-6.684 28.148-23.156"
            fill="#5099f2"
          />
          <path
            d="M1402.65 1088.067c.249-8.711-2.386-16.517-4.434-24.32-5.365-20.44-11.583-40.611-21.142-59.61-3.73-7.413-8.375-14.084-15.01-18.928-13.659-9.972-29.23-2.67-30.627 14.172-.45 5.423.604 10.722 1.618 16.09 4.022 21.361 10.343 42.023 17.793 62.395 3.815 10.43 9.613 19.069 18.619 25.895 6.809 5.159 13.195 9.852 22.008 5.474 8.91-4.432 11.786-12.157 11.175-21.168"
            fill="#f0c608"
          />
          <path
            d="M569.178 1177.859c.362 1.467.953 5.236 2.209 8.772 8.98 25.29 21.88 48.24 39.869 68.379 7.179 8.037 16.507 10.468 26.031 11.72 11.598 1.528 20.244-8.207 19.87-20.502-.172-5.612-2.588-10.498-4.8-15.418-11.27-25.045-27.317-46.716-46.974-65.777-2.326-2.252-4.794-4.456-7.51-6.187-6.768-4.318-13.791-6-21.416-1.669-7.478 4.245-7.68 11.155-7.28 20.682"
            fill="#f0c607"
          />
          <path
            d="M778.137 629.702c-2.708 0-5.428-.161-8.126.028-10.76.762-17.919 5.75-19.466 13.93-1.797 9.49 3.649 15.5 10.974 19.849 6.024 3.57 12.383 6.761 18.933 9.225 24.504 9.215 50.344 12.272 76.07 15.694 2.666.355 5.419.191 8.121.08 8.437-.349 14.658-4.514 17.287-12.37 2.497-7.46-.8-13.628-6.653-18.66-5.02-4.316-10.772-7.35-16.751-9.835-25.727-10.679-52.742-15.81-80.39-17.941"
            fill="#f0c608"
          />
          <path
            d="M1304.776 1278.962c1.565-.083 6.524.194 11.268-.69 13.739-2.556 18.296-14.214 10.065-25.48-1.885-2.574-4.318-5.05-7.036-6.658-25.488-15.065-52.641-25.083-82.538-26.444-8.437-.385-16.11 1.71-22.597 7.3-9.343 8.05-9.36 18.273.08 26.278 12.354 10.473 27.618 14.476 42.723 18.709 14.62 4.099 29.456 6.978 48.035 6.985"
            fill="#fefefe"
          />
          <path
            d="M1151.053 1421.732c16.892-.307 24.303-11.192 18.669-24.348-4.132-9.637-11.11-17.32-19.195-23.87-15.69-12.707-33.102-22.682-51.491-30.825-17.947-7.944-31.575-1.095-36.206 17.282-.973 3.873.891 6.276 3.35 8.44 21.597 19.024 43.736 37.285 70.153 49.506 5.528 2.557 11.238 3.91 14.72 3.815M1314.418 799.648c-16.041.194-23.5 11.784-17.581 25.73 3.729 8.794 10.815 14.982 18.157 20.404 19.789 14.613 41.691 25.015 65.765 30.521 3.13.717 6.411.833 9.635 1.09 7.962.629 13.805-3.108 17.144-9.912 3.357-6.842-.277-12.657-4.827-17.58-7.4-8.004-16.673-13.738-25.495-19.964-13.747-9.698-28.515-17.654-43.835-24.577-6.421-2.901-12.987-5.397-18.963-5.712"
            fill="#5098f1"
          />
          <path
            d="M1002.695 1471.33c-.03 14.55-2.063 29.305 2.464 43.593 2.282 7.2 3.329 15.516 12.994 16.497 10.951 1.112 24.41-6.852 27.443-16.11 4.33-13.218 2.627-26.942 1.807-40.351-.758-12.35-3.586-24.587-5.715-36.837-.55-3.163-1.585-6.334-2.931-9.253-4.2-9.106-12.66-14.552-20.264-13.376-8.07 1.248-14.854 8.165-15.589 18.47-.888 12.398-.209 24.906-.209 37.367"
            fill="#f0c608"
          />
          <path
            d="M1028.328 593.763c-.934 16.424 1.806 31.354 3.782 46.351.143 1.072.254 2.157.503 3.206 2.745 11.492 10.632 19.318 19.132 19.016 8.382-.297 17.26-8.785 18.369-19.887 2.549-25.453 1.711-50.78-6.643-75.346-.521-1.53-1.208-3.017-1.945-4.46-4.336-8.515-12.167-13.892-18.853-12.999-7.26.969-13.565 8.963-14.232 19.35-.551 8.622-.113 17.306-.113 24.77M761.459 515.91c-4.422-.186-8.621.76-12.663 2.486-26.668 11.392-51.388 25.685-71.056 47.552-4.814 5.354-9.907 10.608-5.35 18.537 4.472 7.789 12.38 9.857 22.67 6.593 9.477-3.01 17.154-9.237 25.614-14.01 13.681-7.723 26.882-16.291 40.354-24.384 5.677-3.41 10.715-7.466 13.966-13.289 6.781-12.141.302-23.276-13.535-23.485"
            fill="#5098f1"
          />
          <path
            d="M683.31 814.443c-.665-5.919-3.221-11.797-6.533-17.484-11.927-20.488-29.126-36.255-46.441-51.892-2.333-2.106-5.503-3.364-8.425-4.713-6.094-2.81-11.824-1.565-16.557 2.803-4.741 4.376-6.037 9.799-4.077 16.286 4.45 14.716 10.78 28.188 21.922 39.207 9.698 9.587 20.453 17.773 31.684 25.365 4.496 3.04 9.441 5.314 15.21 4.839 7.673-.632 13.036-6.123 13.217-14.411"
            fill="#fdfdfe"
          />
          <path
            d="M767.373 1332.009c1.367 24.816 8.956 48.311 19.784 70.888 1.384 2.883 3.266 5.674 5.46 7.991 6.48 6.845 15.274 6.04 20.541-1.841 3.4-5.083 4.452-10.899 4.525-16.98.296-24.731-5.997-48.106-14.83-70.883-1.71-4.417-4.823-8.423-7.853-12.162-4.116-5.078-9.856-6.635-16.084-4.879-6.336 1.79-9.915 6.48-10.755 12.879-.629 4.8-.536 9.698-.788 14.987M927.932 532.557c.005-16.633-.073-28.538-3.492-40.08-1.528-5.167-3.07-10.368-5.174-15.313-2.927-6.877-7.753-12.257-15.898-11.305-7.942.928-12.026 6.987-13.717 14.227-1.218 5.216-1.613 10.684-1.84 16.06-.915 21.667.104 43.147 7.16 63.937.52 1.532.845 3.148 1.507 4.615 2.854 6.318 6.93 11.001 14.7 10.41 7.49-.569 11.694-5.005 13.566-11.882 3.158-11.598 3.135-23.51 3.188-30.67"
            fill="#fefefe"
          />
          <path
            d="M1133.803 734.704c-6.556.15-11.724 1.68-13.825 7.627-1.968 5.568-.63 10.792 3.983 14.652 3.297 2.758 6.907 5.171 10.533 7.496 11.805 7.58 23.855 14.698 34.628 23.883 9.554 8.143 21.245 12.806 33.2 16.44 7.164 2.176 14.034 1.758 19.009-4.86 4.242-5.636 3.158-13.107-3.387-20.548-3.176-3.609-6.998-6.76-10.896-9.61-17.551-12.83-36.852-22.549-56.872-30.81-5.412-2.235-10.984-4.72-16.374-4.27"
            fill="#fdfdfe"
          />
          <path
            d="M1425.343 695.376c-4.524-19.293-7.594-41.285-17.782-61.22-1.905-3.732-5.214-6.827-8.194-9.907-4.139-4.277-9.413-5.289-14.901-3.387-5.879 2.041-7.819 6.915-7.879 12.796-.191 18.384 2.526 36.474 5.984 54.428 1.663 8.639 6.545 15.808 12.939 21.978 5.687 5.493 11.72 10.443 19.96 6.603 7.735-3.604 9.69-11.017 9.874-21.29"
            fill="#fefdfe"
          />
          <path
            d="M488.738 1126.215c-.037-21.25-7.375-29.205-21.368-27.73-7.28.767-11.993 4.997-15.06 10.956-7.809 15.186-13.3 30.936-8.02 48.296 1.3 4.278 1.286 8.533 1.215 12.849-.13 7.87 2.708 13.822 10.725 16.069 7.466 2.093 13.052-.936 18.06-10.151 9.21-16.955 11.995-35.69 14.448-50.289"
            fill="#5098f1"
          />
          <path
            d="M788.998 1049.318c9.066 83.22 92.631 186.01 215.54 180.077 93.79-4.527 196.822-90.641 199.084-171.376-60.216 52.358-130.983 74.421-208.627 72.853-77.357-1.562-148.345-23.04-205.997-81.554"
            fill="#784421"
          />
        </g>
      </svg>
    ),
    flag: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
        />
      </svg>
    ),
    fork: (
      <svg
        viewBox="-3 -3 32 32" // TODO size this properly, or get a better icon
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
      >
        <path
          d="M7.5 21C7.5 20.1719 6.82812 19.5 6 19.5C5.17188 19.5 4.5 20.1719 4.5 21C4.5 21.8281 5.17188 22.5 6 22.5C6.82812 22.5 7.5 21.8281 7.5 21ZM7.5 3C7.5 2.17188 6.82812 1.5 6 1.5C5.17188 1.5 4.5 2.17188 4.5 3C4.5 3.82812 5.17188 4.5 6 4.5C6.82812 4.5 7.5 3.82812 7.5 3ZM20.5 5C20.5 4.17188 19.8281 3.5 19 3.5C18.1719 3.5 17.5 4.17188 17.5 5C17.5 5.82812 18.1719 6.5 19 6.5C19.8281 6.5 20.5 5.82812 20.5 5ZM22 5C22 6.10938 21.3906 7.07812 20.5 7.59375C20.4531 13.2344 13.4531 14.4844 10.7969 15.3281C8.3125 16.1094 7.5 16.4844 7.5 18V18.4062C8.39062 18.9219 9 19.8906 9 21C9 22.6562 7.65625 24 6 24C4.34375 24 3 22.6562 3 21C3 19.8906 3.60938 18.9219 4.5 18.4062V5.59375C3.60938 5.07812 3 4.10938 3 3C3 1.34375 4.34375 0 6 0C7.65625 0 9 1.34375 9 3C9 4.10938 8.39062 5.07812 7.5 5.59375V13.3594C8.29688 12.9688 9.14062 12.7031 9.90625 12.4688C12.8125 11.5469 17.4688 10.8594 17.5 7.59375C16.6094 7.07812 16 6.10938 16 5C16 3.34375 17.3438 2 19 2C20.6562 2 22 3.34375 22 5Z"
          fill="currentColor"
        />
      </svg>
    ),
    lightbulb: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    logout: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
    ),
    pencil: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
    ),
    plus: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    ),
    'plus-circle': (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    save: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
        />
      </svg>
    ),
    terminal: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    trash: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    ),
  }

  return <div className={className2 || 'h-10 w-10'}>{svgs[name]}</div>
}

export default Svg
