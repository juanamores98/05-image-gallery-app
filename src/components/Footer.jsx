import React from 'react';

const Footer = () => {
  return (
    <>
      <footer class='bg-primary-gradient'>
        <div class='container py-4 py-lg-5'>
          <div class='text-muted d-flex justify-content-between align-items-center pt-3'>
            <p class='mb-0'>
              Juan Jose Amores - &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
