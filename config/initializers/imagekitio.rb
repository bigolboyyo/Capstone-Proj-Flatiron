ImageKitIo.configure do |config|
  if Rails.env.development?
    config.public_key = "public_bQ/QeNEojdJkfBgdHhFJiqVcygM="
    config.private_key = "private_jNGY5wl0zDAHJ6xsybNFtpPrFtI="
    config.url_endpoint = "https://ik.imagekit.io/bigboyyo" # https://ik.imagekit.io/your_imagekit_id
  end

  if Rails.env.production?
    config.public_key = process.env.IK_PUBLIC_KEY
    config.private_key = process.env.IK_PRIVATE_KEY
    config.url_endpoint = process.env.IK_HOST # https://ik.imagekit.io/your_imagekit_id
  end
  config.service = :active_storage
  # config.constants.MISSING_PRIVATE_KEY = 'custom error message'
end
#make sure to replace the your_public_key, your_private_key and your_url_endpoint with actual values
