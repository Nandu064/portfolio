import React from "react";
import PropTypes from "prop-types";
import "./UniversalButton.scss";

const UniversalButton = ({
  children,
  variant = "primary",
  size = "default",
  disabled = false,
  loading = false,
  onClick,
  type = "button",
  className = "",
  href,
  download,
  target,
  rel,
  ...props
}) => {
  const buttonClasses = [
    "universal-btn",
    `universal-btn--${variant}`,
    `universal-btn--${size}`,
    disabled ? "universal-btn--disabled" : "",
    loading ? "universal-btn--loading" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const buttonContent = (
    <>
      {variant === "primary" && <div className="universal-btn__wave"></div>}
      <div className="universal-btn__content">
        {loading && (
          <i className="fas fa-spinner fa-spin universal-btn__spinner"></i>
        )}
        {children}
      </div>
    </>
  );

  // If href is provided, render as anchor tag
  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={buttonClasses}
        {...props}
      >
        {buttonContent}
      </a>
    );
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {buttonContent}
    </button>
  );
};

UniversalButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "outline", "text"]),
  size: PropTypes.oneOf(["small", "default", "large"]),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
  href: PropTypes.string,
  download: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
};

export default UniversalButton;
